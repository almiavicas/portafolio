import type { Dictionary } from '@/content/en'
import { EMAIL } from '@/lib/i18n'
import { SplitWords } from '../SplitWords'

export function Contact({ t }: { t: Dictionary['contact'] }) {
  return (
    <section className="section contact" id="contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="container contact-inner">
        <p className="eyebrow" data-reveal>
          {t.eyebrow}
        </p>
        <h2 data-split>
          <SplitWords text={t.title} />
        </h2>
        <p className="section-sub" data-reveal>
          {t.body}
        </p>
        <div data-reveal>
          <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(t.subject)}`} className="btn btn-primary btn-lg" data-magnetic>
            {t.cta}
          </a>
        </div>
        <p className="contact-email" data-reveal>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </div>
    </section>
  )
}
