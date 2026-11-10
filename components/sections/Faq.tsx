import type { Dictionary } from '@/content/en'
import { SectionHead } from '../SplitWords'

export function Faq({ t }: { t: Dictionary['faq'] }) {
  return (
    <section className="section" id="faq">
      <div className="container faq-layout">
        <SectionHead eyebrow={t.eyebrow} title={t.title} />
        <div className="faq-list">
          {t.items.map((item) => (
            <details className="faq-item" key={item.q} data-reveal>
              <summary>
                {item.q}
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
