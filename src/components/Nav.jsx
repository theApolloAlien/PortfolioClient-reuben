export default function Nav() {
  return (
    <header className="nav">
      <a className="nav-brand mono" href="#top">
        © Reuben Tay <span className="nav-brand-sub">/ Cyber · Cloud</span>
      </a>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact" className="nav-cta">
          Contact
        </a>
      </nav>
    </header>
  )
}
