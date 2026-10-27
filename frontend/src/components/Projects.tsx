import { projects } from '../content'

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-head">
        <div>
          <p className="eyebrow">02. Projects</p>
          <h2>Projects.</h2>
        </div>
        <a className="text-link" href="https://github.com/VictoriaKerimov" target="_blank" rel="noreferrer">
          View all projects →
        </a>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-thumb" aria-hidden="true">
              <span />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="pills">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <div className="card-links">
              {project.github ? (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              ) : null}
              {project.demo ? (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo ↗
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
