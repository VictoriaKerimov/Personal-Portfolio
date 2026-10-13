import { experience } from '../content'
import { ChecklistDoodle } from './Doodles'

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-head">
        <div>
          <p className="eyebrow">03. Experience</p>
          <h2>Experience.</h2>
        </div>
        <ChecklistDoodle className="doodle experience-doodle" />
      </div>
      <ol className="timeline">
        {experience.map((item) => (
          <li key={`${item.role}-${item.org}`}>
            <div className="time-dot" />
            <div>
              <p className="role">
                {item.role} · {item.org}
              </p>
              <p className="meta">
                {item.dates} · {item.location}
              </p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
