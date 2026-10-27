import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { profile } from './content'
import { ThemeProvider } from './theme'

function Site() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Site />
    </ThemeProvider>
  )
}
