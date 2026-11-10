// Stylized, anonymized product illustrations for the case studies.
// Placeholder bars instead of real text keep them language-neutral and free of client details.
// All motion is CSS-only (see .mock-* rules in globals.css) and stops under reduced motion.

function Frame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mock" aria-hidden="true">
      <div className="mock-bar">
        <i />
        <i />
        <i />
        <span>{label}</span>
      </div>
      <div className="mock-body">{children}</div>
    </div>
  )
}

const Bar = ({ w, strong }: { w: string; strong?: boolean }) => (
  <span className={`mock-line${strong ? ' is-strong' : ''}`} style={{ width: w }} />
)

// Deterministic QR-like pattern.
const QR = Array.from({ length: 81 }, (_, i) => {
  const x = i % 9
  const y = Math.floor(i / 9)
  const finder = (x < 3 && y < 3) || (x > 5 && y < 3) || (x < 3 && y > 5)
  return finder || (x * 7 + y * 13 + x * y) % 3 === 0
})

function Ticketing() {
  return (
    <Frame label="tickets / check-in">
      <div className="mock-ticketing">
        <div className="mock-ticket">
          <div className="mock-ticket-head">
            <Bar w="70%" strong />
            <Bar w="45%" />
          </div>
          <div className="mock-qr">
            {QR.map((on, i) => (
              <span key={i} className={on ? 'on' : ''} />
            ))}
            <span className="mock-scan" />
          </div>
          <div className="mock-valid">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8.5 6.5 12 13 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <Bar w="48px" />
          </div>
        </div>
        <div className="mock-capacity">
          <Bar w="55%" />
          <div className="mock-cap-row">
            <span className="mock-cap-label">1K</span>
            <span className="mock-cap-track">
              <span className="mock-cap-fill is-before" />
            </span>
          </div>
          <div className="mock-cap-row">
            <span className="mock-cap-label is-strong">25K</span>
            <span className="mock-cap-track">
              <span className="mock-cap-fill is-now" />
            </span>
          </div>
          <div className="mock-seats">
            {Array.from({ length: 60 }, (_, i) => (
              <span key={i} style={{ animationDelay: `${(i * 37) % 60 / 20}s` }} />
            ))}
          </div>
        </div>
      </div>
    </Frame>
  )
}

function Classroom() {
  const students = ['J', 'D', 'M', 'S', 'L', 'I']
  return (
    <Frame label="classroom / live session">
      <div className="mock-classroom">
        {students.map((s, i) => (
          <div className={`mock-student${i === 1 ? ' is-speaking' : ''}${i === 4 ? ' is-hand' : ''}`} key={s}>
            <span className="mock-avatar">{s}</span>
            <Bar w="60%" />
            <Bar w="40%" />
            {i === 1 ? (
              <span className="mock-wave">
                {Array.from({ length: 9 }, (_, k) => (
                  <i key={k} style={{ animationDelay: `${k * 0.09}s` }} />
                ))}
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <div className="mock-classroom-bar">
        <span className="mock-mic">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <rect x="9" y="3" width="6" height="11" rx="3" />
            <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
          </svg>
        </span>
        <span className="mock-transcript">
          <Bar w="100%" />
        </span>
      </div>
    </Frame>
  )
}

function Tutor() {
  return (
    <Frame label="tutor / session">
      <div className="mock-tutor">
        <div className="mock-tutor-side">
          <Bar w="70%" strong />
          {[1, 0.66, 0.33].map((p, i) => (
            <div className="mock-objective" key={i}>
              <span className="mock-check" data-done={p === 1} />
              <span className="mock-progress">
                <span style={{ ['--p' as string]: p }} />
              </span>
            </div>
          ))}
        </div>
        <div className="mock-chat">
          <div className="mock-msg is-ai m1">
            <Bar w="92%" />
            <Bar w="78%" />
            <Bar w="54%" />
          </div>
          <div className="mock-msg is-user m2">
            <Bar w="88%" />
            <Bar w="50%" />
          </div>
          <div className="mock-msg is-ai m3">
            <Bar w="85%" />
            <Bar w="62%" />
          </div>
          <div className="mock-msg is-ai is-typing m4">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </Frame>
  )
}

function Workforce() {
  const rows = [
    { t: '07:58', s: 'in' },
    { t: '08:03', s: 'in' },
    { t: '08:11', s: 'late' },
    { t: '—', s: 'out' },
  ]
  return (
    <Frame label="workforce / shifts">
      <div className="mock-workforce">
        <div className="mock-table">
          {rows.map((r, i) => (
            <div className="mock-row" key={i} style={{ animationDelay: `${i * 0.6}s` }}>
              <span className="mock-avatar is-sm" />
              <Bar w="38%" />
              <span className="mock-chip">{r.t}</span>
              <span className={`mock-status is-${r.s}`} />
            </div>
          ))}
        </div>
        <div className="mock-chart">
          {[62, 80, 74, 92, 70, 38, 24].map((h, i) => (
            <span key={i} style={{ ['--h' as string]: `${h}%`, animationDelay: `${i * 0.08}s` }} />
          ))}
        </div>
      </div>
    </Frame>
  )
}

function Crm() {
  return (
    <Frame label="crm / pipeline">
      <div className="mock-crm">
        {[3, 2, 2].map((count, col) => (
          <div className="mock-col" key={col}>
            <Bar w="50%" strong />
            {col === 0 ? (
              <div className="mock-card is-call">
                <span className="mock-phone">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8z" />
                  </svg>
                </span>
                <Bar w="70%" />
              </div>
            ) : null}
            {Array.from({ length: count }, (_, i) => (
              <div className="mock-card" key={i}>
                <Bar w={`${60 + ((i + col) % 3) * 12}%`} />
                <Bar w="40%" />
              </div>
            ))}
            {col === 1 ? <div className="mock-card is-moving"><Bar w="66%" /><Bar w="42%" /></div> : null}
          </div>
        ))}
      </div>
    </Frame>
  )
}

const MOCKUPS: Record<string, () => React.JSX.Element> = {
  ticketing: Ticketing,
  classroom: Classroom,
  tutor: Tutor,
  workforce: Workforce,
  crm: Crm,
}

export function Mockup({ kind }: { kind: string }) {
  const Component = MOCKUPS[kind]
  return Component ? <Component /> : null
}
