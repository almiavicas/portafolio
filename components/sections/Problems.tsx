import type { Dictionary } from '@/content/en'
import { SectionHead } from '../SplitWords'

export function Problems({ t }: { t: Dictionary['problems'] }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.title} />
        <div className="problems-grid">
          {t.items.map((item, i) => (
            <article className="card problem spotlight" key={i} data-reveal>
              <span className="problem-index">0{i + 1}</span>
              <blockquote>{item.quote}</blockquote>
              <p>{item.body}</p>
              <p className="problem-proof">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8.5 6.5 12 13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item.proof}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
