import type { Dictionary } from '@/content/en'
import { LINKEDIN } from '@/lib/i18n'
import { SectionHead } from '../SplitWords'
import { LogoMark } from '../Logo'

export function Founder({ t }: { t: Dictionary['founder'] }) {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.title} />
        <div className="founder">
          <div className="founder-card card spotlight" data-reveal>
            <div className="founder-avatar" aria-hidden="true">
              <span>AA</span>
              <LogoMark size={22} className="founder-avatar-mark" />
            </div>
            <p className="founder-name">{t.name}</p>
            <p className="founder-role">{t.role}</p>
            {t.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm" data-magnetic>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z" />
              </svg>
              {t.linkedin}
            </a>
          </div>
          <ol className="timeline">
            {t.timeline.map((item) => (
              <li className="timeline-item" key={item.title} data-reveal>
                <p className="timeline-date">{item.date}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
