import { projects, alsoBuilt } from '../content.js'
import SectionHead from './SectionHead.jsx'

function TrophyIcon() {
  return (
    <svg
      className="trophy-icon"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10v6a5 5 0 0 1-10 0V4z" />
      <path d="M7 6H4a1 1 0 0 0-1 1c0 2.2 1.8 4 4 4" />
      <path d="M17 6h3a1 1 0 0 1 1 1c0 2.2-1.8 4-4 4" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHead
        index="03"
        title="PROJECTS"
        note={
          <a className="section-note-link" href="#also-built">
            FEATURED 5 OF 9 · REST BELOW ↓
          </a>
        }
        bot="builder"
      />

      <div className="project-grid">
        {projects.map((p, i) => (
          <article
            key={p.id}
            className={`project panel reveal${i === 0 ? ' project-wide' : ''}`}
            data-delay={i * 80}
          >
            <div className="project-meta mono">
              <span className="project-id">{p.id}</span>
              <span>{p.year}</span>
            </div>
            {p.award && (
              <span className="project-award mono">
                <TrophyIcon /> {p.award}
              </span>
            )}
            <h3 className="project-title display">{p.title}</h3>
            <span className="project-subtitle mono">{p.subtitle}</span>
            <p className="project-desc">{p.description}</p>
            <div className="tag-row">
              {p.tags.map((t) => (
                <span key={t} className="tag mono">
                  {t}
                </span>
              ))}
            </div>
            {p.links.length > 0 && (
              <div className="project-links">
                {p.links.map((l) => (
                  <a key={l.label} className="project-link mono" href={l.url} target="_blank" rel="noreferrer">
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="also-built panel reveal" id="also-built">
        <span className="panel-label mono">ALSO BUILT · 4 MORE</span>
        <ul className="also-built-list">
          {alsoBuilt.map((line) => (
            <li key={line} className="mono">
              {line}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
