import { Fragment } from 'react'

/** Wraps each word in a clipping span so it can rise into view (see Motion). */
export function SplitWords({ text }: { text: string }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="word">
            <span>{word}</span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </>
  )
}

export function SectionHead({ eyebrow, title, sub, center }: { eyebrow: string; title: string; sub?: string; center?: boolean }) {
  return (
    <div className={`section-head${center ? ' is-center' : ''}`}>
      <p className="eyebrow" data-reveal>
        {eyebrow}
      </p>
      <h2 data-split>
        <SplitWords text={title} />
      </h2>
      {sub ? (
        <p className="section-sub" data-reveal>
          {sub}
        </p>
      ) : null}
    </div>
  )
}
