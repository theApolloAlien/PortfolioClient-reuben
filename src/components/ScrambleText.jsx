import { useEffect, useRef, useState } from 'react'

const GLYPHS = '<>-_\\/[]{}=+*^?#0123456789'

// Terminal decode reveal: letters cycle random glyphs, then resolve
// left-to-right over ~500ms. Plays once on scroll-into-view.
export default function ScrambleText({ text, className = '' }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(text)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let timer = null
    let settle = null
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        io.disconnect()
        const start = performance.now()
        const duration = 520
        // rAF suspends in background tabs; guarantee the resolved word.
        settle = setTimeout(() => setDisplay(text), duration + 200)
        const step = (now) => {
          const t = (now - start) / duration
          const resolved = Math.floor(t * text.length)
          if (t >= 1) {
            setDisplay(text)
            return
          }
          let out = ''
          for (let i = 0; i < text.length; i++) {
            if (i < resolved || text[i] === ' ') out += text[i]
            else out += GLYPHS[(Math.random() * GLYPHS.length) | 0]
          }
          setDisplay(out)
          timer = requestAnimationFrame(step)
        }
        timer = requestAnimationFrame(step)
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      if (timer) cancelAnimationFrame(timer)
      if (settle) clearTimeout(settle)
    }
  }, [text])

  return (
    <span ref={ref} className={className} aria-label={text}>
      {display}
    </span>
  )
}
