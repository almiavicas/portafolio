import type { Dictionary } from '@/content/en'
import { HeroCanvas } from '../HeroCanvas'
import { SplitWords } from '../SplitWords'

export function Hero({ t }: { t: Dictionary['hero'] }) {
  return (
    <section className="hero" id="top">
      <HeroCanvas />
      <div className="hero-vignette" aria-hidden="true" />
      <div className="container hero-inner">
        <p className="hero-badge" data-hero>
          <span className="pulse-dot" aria-hidden="true" />
          {t.badge}
        </p>
        <p className="eyebrow" data-hero>
          {t.eyebrow}
        </p>
        <h1 className="hero-title">
          <span className="hero-line">
            <SplitWords text={t.line1} />
          </span>
          <span className="hero-line gradient-text">
            <SplitWords text={t.line2} />
          </span>
        </h1>
        <p className="hero-sub" data-hero>
          {t.sub}
        </p>
        <div className="hero-ctas" data-hero>
          <a href="#contact" className="btn btn-primary btn-lg" data-magnetic>
            {t.primary}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#work" className="btn btn-ghost btn-lg" data-magnetic>
            {t.secondary}
          </a>
        </div>
      </div>
      <a href="#stats" className="scroll-cue" data-hero aria-hidden="true" tabIndex={-1}>
        <span>{t.scroll}</span>
        <i />
      </a>
    </section>
  )
}
