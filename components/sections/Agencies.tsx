import type { Dictionary } from '@/content/en'
import { EMAIL } from '@/lib/i18n'

export function Agencies({ t, subject }: { t: Dictionary['agencies']; subject: string }) {
  return (
    <section className="section section-tight">
      <div className="container">
        <div className="agencies card spotlight" data-reveal>
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2>{t.title}</h2>
            <p>{t.body}</p>
          </div>
          <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(`${subject} · Agency partnership`)}`} className="btn btn-ghost" data-magnetic>
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
