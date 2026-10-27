import heroPhoto from '../assets/Library.jpg'
import { profile } from '../content'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <h1>
          Hi, I’m <span>{profile.firstName}.</span>
        </h1>
        <p className="tagline">{profile.tagline}</p>
        <p className="lede">{profile.bio}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View My Projects →
          </a>
          <a
            className="btn btn-ghost"
            href={profile.resumeHref}
            target="_blank"
            rel="noreferrer"
          >
            View Résumé
          </a>
        </div>
        <div className="socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <MailIcon />
          </a>
        </div>
      </div>
      <div className="hero-photo">
        <img
          src={heroPhoto}
          alt="New York City skyline at dusk over the water"
        />
      </div>
    </section>
  )
}

export function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.17-3.37-1.17-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.7.11 2.5.33 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"
      />
    </svg>
  )
}

export function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.5 9H4V20h2.5V9ZM5.25 4A1.45 1.45 0 1 0 5.26 6.9 1.45 1.45 0 0 0 5.25 4ZM20 20h-2.5v-5.6c0-1.54-.55-2.6-1.93-2.6-1.05 0-1.68.71-1.95 1.4-.1.24-.12.57-.12.9V20H11V9h2.4v1.5c.4-.7 1.33-1.7 3.24-1.7 2.37 0 4.36 1.55 4.36 4.88V20Z"
      />
    </svg>
  )
}

export function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm0 3.2-8 5-8-5V8l8 5 8-5v1.2Z"
      />
    </svg>
  )
}
