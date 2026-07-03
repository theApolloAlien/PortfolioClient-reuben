import { useEffect, useRef } from 'react'
import { experience } from '../content.js'
import SectionHead from './SectionHead.jsx'

export default function Experience() {
  const timelineRef = useRef(null)

  // Draw the connector line once when the timeline enters the viewport.
  useEffect(() => {
    const el = timelineRef.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add('drawn')
          io.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="section" id="experience">
      <SectionHead
        index="02"
        title="EXPERIENCE"
        note="SERVICE RECORD · REVERSE CHRONOLOGICAL"
        bot="officer"
      />

      <div className="timeline" ref={timelineRef}>
        {experience.map((job, i) => (
          <article key={job.id} className="timeline-item reveal" data-delay={i * 90}>
            <div className="timeline-rail">
              <span className={`timeline-node${job.active ? ' timeline-node-active' : ''}`} />
            </div>
            <div className="timeline-card panel">
              <div className="timeline-meta mono">
                <span className="timeline-id">{job.id}</span>
                <span className="timeline-period">{job.period}</span>
                <span className="timeline-loc">{job.location}</span>
              </div>
              <h3 className="timeline-role">{job.role}</h3>
              <span className="timeline-org">{job.org}</span>
              <ul className="timeline-points">
                {job.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
              <div className="tag-row">
                {job.tags.map((t) => (
                  <span key={t} className="tag mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
