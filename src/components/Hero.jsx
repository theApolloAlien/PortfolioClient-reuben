import { useEffect, useRef, useState } from 'react'
import { site } from '../content.js'
import PixelBot from './PixelBot.jsx'

export default function Hero() {
  const stageRef = useRef(null)
  const [tagline, setTagline] = useState(site.tagline)

  // Typewriter reveal of the tagline, once, after the load stagger settles.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setTagline('')
    let i = 0
    let timer = null
    const start = setTimeout(() => {
      timer = setInterval(() => {
        i += 1
        setTagline(site.tagline.slice(0, i))
        if (i >= site.tagline.length) clearInterval(timer)
      }, 22)
    }, 1100)
    return () => {
      clearTimeout(start)
      if (timer) clearInterval(timer)
    }
  }, [])

  // Mouse parallax on the floating tags (pointer devices only).
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(pointer: fine)').matches) return
    const onMove = (e) => {
      const r = stage.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width - 0.5
      const py = (e.clientY - r.top) / r.height - 0.5
      stage.style.setProperty('--px', px.toFixed(3))
      stage.style.setProperty('--py', py.toFixed(3))
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero-hud mono">
        <span className="hero-in" style={{ animationDelay: '0.15s' }}>
          SGP · 1.3521° N / 103.8198° E
        </span>
        <span className="hero-hud-status hero-in" style={{ animationDelay: '0s' }}>
          <span className="dot" /> SYS.ONLINE · OPEN TO INTERNSHIPS
          <span className="cursor" aria-hidden="true" />
        </span>
      </div>

      <div className="hero-stage" ref={stageRef}>
        <img className="hero-photo hero-in" style={{ animationDelay: '0.25s' }} src="/reuben.png" alt="Reuben Tay" />

        <h1 className="hero-name display" aria-label="Reuben Tay">
          <span className="hero-name-line hero-in" style={{ animationDelay: '0.4s' }}>
            REUBEN
          </span>
          <span className="hero-name-line hero-name-last hero-in" style={{ animationDelay: '0.55s' }}>
            TAY
          </span>
        </h1>

        <span className="sticker sticker-1 mono hero-in" style={{ animationDelay: '0.9s' }}>
          CLOUD ARCHITECTURE
        </span>
        <span className="sticker sticker-2 mono hero-in" style={{ animationDelay: '1s' }}>
          SECURITY & CTF ✦ 1ST PLACE
        </span>
        <span className="sticker sticker-3 mono hero-in" style={{ animationDelay: '1.1s' }}>
          OBSERVABILITY © CSIT
        </span>
      </div>

      <div className="hero-foot">
        <div className="hero-left hero-in" style={{ animationDelay: '0.75s' }}>
          <PixelBot variant="greeter" size={48} className="hero-bot" />
          <div className="hero-socials mono">
            <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${site.email}`}>Email</a>
          </div>
        </div>
        <div className="hero-roles hero-in" style={{ animationDelay: '0.65s' }}>
          <span>{site.roles[0]}</span>
          <span>{site.roles[1]}</span>
          <p className="hero-tagline mono">{tagline}</p>
        </div>
      </div>
    </section>
  )
}
