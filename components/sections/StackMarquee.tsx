const STACK = [
  'OpenAI', 'Anthropic', 'Gemini', 'Deepgram', 'Langfuse', 'PostHog', 'Next.js', 'React', 'Angular',
  'TypeScript', 'Node.js', 'Python', 'Django', 'FastAPI', 'Postgres', 'Supabase', 'Redis', 'Firebase',
  'Airflow', 'Docker', 'Terraform', 'AWS', 'GCP', 'Vercel',
]

export function StackMarquee({ label }: { label: string }) {
  return (
    <section className="marquee-section" aria-label={label}>
      <p className="eyebrow container">{label}</p>
      <div className="marquee">
        {[0, 1].map((copy) => (
          <ul className="marquee-track" key={copy} aria-hidden={copy === 1}>
            {STACK.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
