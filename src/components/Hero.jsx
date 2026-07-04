import { useEffect, useState } from 'react'
import { site } from '../content.js'
import PixelBot from './PixelBot.jsx'

export default function Hero() {
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

  return (
    <section className="hero" id="top">
      <div className="hero-hud mono">
        <span className="hero-in" style={{ animationDelay: '0.15s' }}>
          SGP · 1.3521° N / 103.8198° E
        </span>
        <span className="hero-hud-status hero-in" style={{ animationDelay: '0s' }}>
          <span className="dot" /> SYS.ONLINE
          <span className="cursor" aria-hidden="true" />
        </span>
      </div>

      <div className="hero-stage">
        <h1 className="hero-name display" aria-label="Reuben Tay">
          <span className="hero-name-line hero-in" style={{ animationDelay: '0.4s' }}>
            REUBEN
          </span>
          <span className="hero-name-line hero-name-last hero-in" style={{ animationDelay: '0.55s' }}>
            TAY
          </span>
        </h1>
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
          {site.roles.map((line) => (
            <span key={line}>{line}</span>
          ))}
          <p className="hero-tagline mono">{tagline}</p>
        </div>
      </div>
    </section>
  )
}
