import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Ambient from './components/Ambient.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Creds from './components/Creds.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  // Scroll reveals with per-element stagger (data-delay, ms).
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const el = e.target
          observer.unobserve(el)
          const delay = Number(el.dataset.delay) || 0
          if (delay) setTimeout(() => el.classList.add('visible'), delay)
          else el.classList.add('visible')
        })
      },
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Pause every CSS loop (robots, marquee, scanlines, drift) when tab hidden.
  useEffect(() => {
    const onVis = () => document.body.classList.toggle('page-hidden', document.hidden)
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  return (
    <>
      <Ambient />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Creds />
        <Contact />
      </main>
    </>
  )
}
