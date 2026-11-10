import { useId } from 'react'

/** The Avila Systems mark: an "A" drawn as a small system of connected nodes. */
export function LogoMark({ size = 28, className }: { size?: number; className?: string }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`g${id}`} x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9aa3ff" />
          <stop offset="0.55" stopColor="#5ab8ff" />
          <stop offset="1" stopColor="#2ee6c5" />
        </linearGradient>
      </defs>
      <g stroke={`url(#g${id})`} strokeWidth="2.2" strokeLinecap="round">
        <path d="M16 5 6.5 27M16 5l9.5 22M11.2 16.4h9.6" />
      </g>
      <g fill={`url(#g${id})`}>
        <circle cx="16" cy="5" r="2.9" />
        <circle cx="6.5" cy="27" r="2.6" />
        <circle cx="25.5" cy="27" r="2.6" />
        <circle cx="11.2" cy="16.4" r="2" />
        <circle cx="20.8" cy="16.4" r="2" />
      </g>
    </svg>
  )
}

export function Wordmark() {
  return (
    <span className="wordmark">
      <LogoMark />
      <span className="wordmark-text">
        Avila<span>Systems</span>
      </span>
    </span>
  )
}
