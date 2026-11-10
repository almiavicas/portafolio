'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/**
 * Page-wide motion layer. Sections opt in with data attributes:
 * - data-hero: hero intro sequence (hidden by CSS until this runs)
 * - data-split: heading whose `.word > span` children rise in on scroll
 * - data-reveal: fades/slides in on scroll
 * - data-count: number counts up from 0 to its data-count value
 * - data-process-line: progress line drawn by scroll position
 * - data-parallax: drifts against the scroll direction
 * - data-magnetic: element leans toward the cursor
 * - .spotlight: exposes --mx / --my for a cursor-following glow
 * Everything is skipped under prefers-reduced-motion, leaving content static and visible.
 */
export function Motion() {
  useGSAP(() => {
    const root = document.documentElement
    root.classList.add('motion-ready')
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Hero intro.
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
      intro
        .to('.hero-title .word > span', { yPercent: 0, y: 0, duration: 1.1, stagger: 0.06 })
        .to('[data-hero]', { opacity: 1, y: 0, duration: 0.9, stagger: 0.09 }, '-=0.75')

      // Split headings.
      gsap.utils.toArray<HTMLElement>('[data-split]').forEach((el) => {
        gsap.from(el.querySelectorAll('.word > span'), {
          yPercent: 110,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.04,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })

      // Generic reveals, batched so siblings stagger together.
      gsap.set('[data-reveal]', { opacity: 0, y: 28 })
      ScrollTrigger.batch('[data-reveal]', {
        start: 'top 90%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08, overwrite: true }),
      })

      // Counters.
      gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
        const target = Number(el.dataset.count)
        const state = { v: 0 }
        el.textContent = '0'
        gsap.to(state, {
          v: target,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          onUpdate: () => {
            el.textContent = Math.round(state.v).toLocaleString()
          },
        })
      })

      // Process progress line.
      gsap.utils.toArray<HTMLElement>('[data-process-line]').forEach((line) => {
        // CSS maps --progress to scaleX (desktop, horizontal) or scaleY (mobile, vertical).
        gsap.fromTo(
          line,
          { '--progress': 0 },
          {
            '--progress': 1,
            ease: 'none',
            scrollTrigger: { trigger: line.parentElement, start: 'top 75%', end: 'bottom 55%', scrub: 0.6 },
          },
        )
      })

      // Parallax drift.
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        const amount = Number(el.dataset.parallax || 40)
        gsap.fromTo(
          el,
          { y: amount },
          { y: -amount, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } },
        )
      })

      // Magnetic buttons (fine pointers only).
      if (window.matchMedia('(pointer: fine)').matches) {
        const cleanups: (() => void)[] = []
        gsap.utils.toArray<HTMLElement>('[data-magnetic]').forEach((el) => {
          const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' })
          const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' })
          const move = (e: PointerEvent) => {
            const r = el.getBoundingClientRect()
            xTo((e.clientX - (r.left + r.width / 2)) * 0.3)
            yTo((e.clientY - (r.top + r.height / 2)) * 0.4)
          }
          const leave = () => {
            xTo(0)
            yTo(0)
          }
          el.addEventListener('pointermove', move)
          el.addEventListener('pointerleave', leave)
          cleanups.push(() => {
            el.removeEventListener('pointermove', move)
            el.removeEventListener('pointerleave', leave)
          })
        })
        return () => cleanups.forEach((fn) => fn())
      }
    })

    // Cursor spotlight on cards (a cheap CSS-variable update, fine under reduced motion too).
    const onPointer = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest<HTMLElement>('.spotlight')
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - r.left}px`)
      card.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    document.addEventListener('pointermove', onPointer, { passive: true })

    // Fonts can shift layout after load; recompute trigger positions once they settle.
    document.fonts?.ready.then(() => ScrollTrigger.refresh())

    return () => {
      document.removeEventListener('pointermove', onPointer)
      mm.revert()
    }
  })

  return null
}
