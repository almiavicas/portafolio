'use client'

import { useEffect, useState } from 'react'
import type { Dictionary } from '@/content/en'
import type { Locale } from '@/lib/i18n'
import { Wordmark } from './Logo'

const LINKS = ['services', 'process', 'work', 'about', 'faq'] as const

export function Header({ t, lang, other }: { t: Dictionary['nav']; lang: Locale; other: Locale }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="container header-inner">
        <a href={`/${lang}#top`} className="logo-link" aria-label="Avila Systems" onClick={close}>
          <Wordmark />
        </a>

        <nav className="nav" id="site-nav" aria-label="Main">
          {LINKS.map((key) => (
            <a key={key} href={`#${key}`} onClick={close}>
              {t[key]}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href={`/${other}`} hrefLang={other} lang={other} className="lang-switch" aria-label={t.switchLabel} title={t.switchLabel}>
            {t.switchShort}
          </a>
          <a href="#contact" className="btn btn-primary btn-sm header-cta" onClick={close}>
            {t.cta}
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={t.menu}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
