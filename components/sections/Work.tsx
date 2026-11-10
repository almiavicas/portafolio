import type { Dictionary } from '@/content/en'
import { SectionHead } from '../SplitWords'
import { Mockup } from '../Mockups'

export function Work({ t }: { t: Dictionary['work'] }) {
  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.title} sub={t.sub} />
        <div className="cases">
          {t.cases.map((c, i) => (
            <article className={`case${i % 2 ? ' is-flipped' : ''}`} key={c.key}>
              <div className="case-visual" data-reveal>
                <div className="case-visual-inner" data-parallax="14">
                  <Mockup kind={c.key} />
                </div>
              </div>
              <div className="case-body" data-reveal>
                <p className="case-industry">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  {c.industry}
                </p>
                <h3>{c.title}</h3>
                <p className="case-summary">{c.summary}</p>
                {c.outcome ? (
                  <div className="case-outcome">
                    <span>{t.outcomeLabel}</span>
                    <p>{c.outcome}</p>
                  </div>
                ) : null}
                {c.stack.length ? (
                  <ul className="tags">
                    {c.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
