import type { Dictionary } from '@/content/en'
import { EMAIL, GITHUB, LINKEDIN } from '@/lib/i18n'
import { Wordmark } from '../Logo'

export function Footer({ t, nav }: { t: Dictionary['footer']; nav: Dictionary['nav'] }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Wordmark />
          <p>{t.tagline}</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <a href="#services">{nav.services}</a>
          <a href="#process">{nav.process}</a>
          <a href="#work">{nav.work}</a>
          <a href="#about">{nav.about}</a>
          <a href="#faq">{nav.faq}</a>
        </nav>
        <div className="footer-social">
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={`mailto:${EMAIL}`}>Email</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} Avila Systems. {t.rights}
        </p>
      </div>
    </footer>
  )
}
