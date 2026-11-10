import type { Dictionary } from '@/content/en'

export function Stats({ stats }: { stats: Dictionary['stats'] }) {
  return (
    <section className="stats" id="stats" aria-label="Highlights">
      <div className="container stats-grid">
        {stats.map((s, i) => (
          <div className="stat" key={i} data-reveal>
            <p className="stat-value">
              {'value' in s ? (
                <>
                  <span data-count={s.value}>{s.value}</span>
                  <span className="stat-suffix">{s.suffix}</span>
                </>
              ) : (
                s.text
              )}
            </p>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
