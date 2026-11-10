import type { Dictionary } from '@/content/en'
import { SectionHead } from '../SplitWords'

const ICONS: Record<string, React.ReactNode> = {
  ai: (
    <>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      <circle cx="12" cy="12" r="3.2" />
    </>
  ),
  modernize: (
    <>
      <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8.7" />
      <path d="M20 4v4.7h-4.7" />
      <path d="M20 12a8 8 0 0 1-13.7 5.6L4 15.3" />
      <path d="M4 20v-4.7h4.7" />
    </>
  ),
  code: <path d="m8 6-5 6 5 6M16 6l5 6-5 6M13.5 4l-3 16" />,
  flow: (
    <>
      <rect x="3" y="4" width="6" height="5" rx="1.5" />
      <rect x="15" y="4" width="6" height="5" rx="1.5" />
      <rect x="9" y="15" width="6" height="5" rx="1.5" />
      <path d="M6 9v2.5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V9M12 13v2" />
    </>
  ),
}

export function Services({ t }: { t: Dictionary['services'] }) {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.title} sub={t.sub} />
        <div className="services-grid">
          {t.items.map((s) => (
            <article className="card service spotlight" key={s.title} data-reveal>
              <div className="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {ICONS[s.icon]}
                </svg>
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul className="service-points">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
