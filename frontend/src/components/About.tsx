import { education, languages, profile, skills } from '../content'
import { LaptopDoodle } from './Doodles'

export function About() {
  return (
    <section className="section" id="about">
      <div className="about-grid">
        <div>
          <p className="eyebrow">01. About me</p>
          <h2>About Me.</h2>
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="muted">
            {education.school} · {education.degree} · {education.dates}.{' '}
            {education.extra}. Honors: {profile.honors}
          </p>
        </div>
        <div className="skills-panel">
          <div className="skills-heading">
            <div>
              <p className="panel-label">Technical skills</p>
              <ul className="pills">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <p className="panel-label">Languages</p>
              <ul className="pills">
                {languages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <LaptopDoodle className="doodle" />
          </div>
        </div>
      </div>
    </section>
  )
}
