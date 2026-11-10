import type { Dictionary } from '@/content/en'
import { SectionHead } from '../SplitWords'

export function Process({ t }: { t: Dictionary['process'] }) {
  return (
    <section className="section section-alt" id="process">
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.title} sub={t.sub} />
        <div className="process">
          <span className="process-track" aria-hidden="true">
            <span className="process-line" data-process-line />
          </span>
          <ol className="process-steps">
          {t.steps.map((step, i) => (
            <li className="process-step" key={step.title} data-reveal>
              <span className="process-node" aria-hidden="true">
                <span>0{i + 1}</span>
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
