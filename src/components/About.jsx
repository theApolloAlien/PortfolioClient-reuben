import { useEffect, useRef, useState } from 'react'
import { about } from '../content.js'
import SectionHead from './SectionHead.jsx'

// Count-up for stat values like "1st", "30%", "9+", "1,000+":
// animates the leading number, keeps prefix/suffix text.
function StatValue({ value }) {
  const ref = useRef(null)
  const [text, setText] = useState(value)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const match = value.replace(/,/g, '').match(/^(\d+)(.*)$/)
    if (!match) return
    const target = parseInt(match[1], 10)
    const suffix = match[2]
    const useComma = value.includes(',')
    setText(`0${suffix}`)

    let raf = null
    let settle = null
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        io.disconnect()
        const start = performance.now()
        const dur = 950
        // rAF suspends in background tabs; guarantee the final value.
        settle = setTimeout(() => setText(value), dur + 250)
        const step = (now) => {
          const t = Math.min((now - start) / dur, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          const n = Math.round(target * eased)
          setText(`${useComma ? n.toLocaleString('en-US') : n}${suffix}`)
          if (t < 1) raf = requestAnimationFrame(step)
        }
        raf = requestAnimationFrame(step)
      },
      { threshold: 0.6 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      if (raf) cancelAnimationFrame(raf)
      if (settle) clearTimeout(settle)
    }
  }, [value])

  return (
    <span ref={ref} className="stat-value display">
      {text}
    </span>
  )
}

export default function About() {
  return (
    <section className="section" id="about">
      <SectionHead index="01" title="ABOUT" bot="reader" />

      <div className="about-grid">
        <div className="about-copy reveal">
          {about.full.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="about-photo panel reveal">
          <span className="panel-label mono">PERSONNEL FILE · TAY, REUBEN</span>
          <img src="/reuben.png" alt="Reuben Tay" loading="lazy" />
        </div>

        <div className="edu panel reveal about-edu" data-delay="120">
          <span className="panel-label mono">EDUCATION</span>
          {about.education.map((e) => (
            <div key={e.school} className="edu-item">
              <div className="edu-top">
                <strong>{e.school}</strong>
                <span className="mono edu-period">{e.period}</span>
              </div>
              <span className="edu-degree">{e.degree}</span>
              <span className="edu-detail mono">{e.detail}</span>
            </div>
          ))}
        </div>

        <div className="stat-grid reveal">
          {about.stats.map((s) => (
            <div key={s.label} className="stat panel">
              <StatValue value={s.value} />
              <span className="stat-label mono">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
