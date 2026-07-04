import { site } from '../content.js'
import PixelBot from './PixelBot.jsx'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <PixelBot variant="mailer" size={56} className="contact-bot reveal" />
      <span className="contact-kicker mono reveal">READY TO DEPLOY · NEXT MISSION?</span>
      <h2 className="contact-title display reveal">
        GET IN
        <br />
        TOUCH <span className="contact-arrow">→</span>
      </h2>
      <a
        className="contact-email reveal"
        href={`mailto:${site.email}?subject=${encodeURIComponent(
          "Let's connect, Reuben",
        )}&body=${encodeURIComponent('Hi Reuben,\n\n')}`}
      >
        {site.email}
      </a>

      <div className="contact-links reveal">
        <a className="mono" href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        <a className="mono" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a className="mono" href={site.secondary} target="_blank" rel="noreferrer">Secondary Site ↗</a>
      </div>

      <footer className="footer mono">
        <span>© {new Date().getFullYear()} Reuben Tay</span>
        <span>CYBERSECURITY & CLOUD · SINGAPORE</span>
        <span>SYS.END_OF_TRANSMISSION</span>
      </footer>
    </section>
  )
}
