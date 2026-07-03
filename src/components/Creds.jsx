import { certifications, leadership } from '../content.js'
import SectionHead from './SectionHead.jsx'

export default function Creds() {
  return (
    <section className="section" id="creds">
      <SectionHead index="05" title="CREDENTIALS" bot="medalist" />

      <div className="creds-grid">
        <div className="panel reveal">
          <span className="panel-label mono">CERTIFICATIONS & AWARDS</span>
          <ul className="cred-list">
            {certifications.map((c) => (
              <li key={c.name}>
                <span>{c.name}</span>
                <span className={`mono cred-year${c.pending ? ' cred-pending' : ''}`}>{c.year}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="panel reveal" data-delay="120">
          <span className="panel-label mono">LEADERSHIP & ACTIVITIES</span>
          <ul className="cred-list cred-list-lead">
            {leadership.map((l) => (
              <li key={l.role}>
                <div className="cred-lead-top">
                  <strong>{l.role}</strong>
                  <span className="mono cred-year">{l.org}</span>
                </div>
                <span className="cred-detail">{l.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
