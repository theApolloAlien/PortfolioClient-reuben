import { skills } from '../content.js'
import SectionHead from './SectionHead.jsx'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHead index="04" title="SKILLS" bot="tinkerer" />

      <div className="skills-grid">
        {skills.map((g, i) => (
          <div key={g.group} className="skill-group panel reveal" data-delay={i * 70}>
            <span className="panel-label mono">{g.group.toUpperCase()}</span>
            <div className="tag-row">
              {g.items.map((s) => (
                <span key={s} className="tag tag-lg mono">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
