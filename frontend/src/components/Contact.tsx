import { profile } from '../content'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Hero'
import { PlantDoodle } from './Doodles'

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div>
        <p className="eyebrow">04. Contact</p>
        <h2>Let’s Connect.</h2>
        <p>
          I’m looking for internships, research, and people who like talking
          about CS. Email is the fastest way to reach me.
        </p>
      </div>
      <div className="contact-actions">
        <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
          <MailIcon /> Send a Message
        </a>
        <a
          className="icon-btn"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </a>
        <a
          className="icon-btn"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
        <PlantDoodle className="doodle contact-doodle" />
      </div>
    </section>
  )
}
