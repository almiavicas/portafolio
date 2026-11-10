'use client'

import { useEffect, useRef } from 'react'

type Node = { x: number; y: number; vx: number; vy: number; r: number; hub: boolean; phase: number }
type Pulse = { a: number; b: number; t: number; speed: number }

const LINK_DIST = 150
const CURSOR_RADIUS = 190

// Interpolates the brand gradient (indigo -> sky -> teal) by horizontal position.
function brandColor(t: number, alpha: number) {
  const stops = [
    [154, 163, 255],
    [90, 184, 255],
    [46, 230, 197],
  ]
  const s = Math.min(Math.max(t, 0), 1) * 2
  const i = Math.min(Math.floor(s), 1)
  const f = s - i
  const c = stops[i].map((v, k) => Math.round(v + (stops[i + 1][k] - v) * f))
  return `rgba(${c[0]},${c[1]},${c[2]},${alpha})`
}

/**
 * The hero's living "system": drifting nodes that link up when close,
 * data pulses that travel along the links, and a cursor that pulls nearby nodes in.
 */
export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let nodes: Node[] = []
    let pulses: Pulse[] = []
    let raf = 0
    let running = false
    let visible = true
    const pointer = { x: -9999, y: -9999, active: false }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.round(Math.min(110, Math.max(36, (width * height) / 13000)))
      nodes = Array.from({ length: count }, () => {
        const hub = Math.random() < 0.12
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          r: hub ? 2.4 + Math.random() * 1.2 : 1 + Math.random() * 0.9,
          hub,
          phase: Math.random() * Math.PI * 2,
        }
      })
      pulses = []
    }

    const spawnPulse = () => {
      const a = Math.floor(Math.random() * nodes.length)
      const neighbours: number[] = []
      for (let i = 0; i < nodes.length; i++) {
        if (i === a) continue
        const d = Math.hypot(nodes[i].x - nodes[a].x, nodes[i].y - nodes[a].y)
        if (d > 40 && d < LINK_DIST) neighbours.push(i)
      }
      if (neighbours.length) {
        const b = neighbours[Math.floor(Math.random() * neighbours.length)]
        pulses.push({ a, b, t: 0, speed: 0.008 + Math.random() * 0.012 })
      }
    }

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height)

      // Move nodes, with a gentle pull toward the cursor.
      for (const n of nodes) {
        if (!reduced) {
          if (pointer.active) {
            const dx = pointer.x - n.x
            const dy = pointer.y - n.y
            const d = Math.hypot(dx, dy)
            if (d < CURSOR_RADIUS && d > 1) {
              const force = (1 - d / CURSOR_RADIUS) * 0.035
              n.vx += (dx / d) * force
              n.vy += (dy / d) * force
            }
          }
          n.vx *= 0.985
          n.vy *= 0.985
          const speed = Math.hypot(n.vx, n.vy)
          if (speed < 0.08) {
            n.vx += (Math.random() - 0.5) * 0.02
            n.vy += (Math.random() - 0.5) * 0.02
          }
          n.x += n.vx
          n.y += n.vy
          if (n.x < -20) n.x = width + 20
          if (n.x > width + 20) n.x = -20
          if (n.y < -20) n.y = height + 20
          if (n.y > height + 20) n.y = -20
        }
      }

      // Links between nearby nodes.
      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 > LINK_DIST * LINK_DIST) continue
          const d = Math.sqrt(d2)
          let alpha = (1 - d / LINK_DIST) * 0.22
          if (pointer.active) {
            const pd = Math.hypot((a.x + b.x) / 2 - pointer.x, (a.y + b.y) / 2 - pointer.y)
            if (pd < CURSOR_RADIUS) alpha += (1 - pd / CURSOR_RADIUS) * 0.35
          }
          ctx.strokeStyle = brandColor((a.x + b.x) / 2 / width, alpha)
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }

      // Data pulses travelling along links.
      if (!reduced && Math.random() < 0.09 && pulses.length < 26) spawnPulse()
      pulses = pulses.filter((p) => {
        p.t += p.speed
        const a = nodes[p.a]
        const b = nodes[p.b]
        if (!a || !b || p.t >= 1) return false
        const x = a.x + (b.x - a.x) * p.t
        const y = a.y + (b.y - a.y) * p.t
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 9)
        glow.addColorStop(0, brandColor(x / width, 0.9))
        glow.addColorStop(1, brandColor(x / width, 0))
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(x, y, 9, 0, Math.PI * 2)
        ctx.fill()
        return true
      })

      // Nodes.
      for (const n of nodes) {
        let alpha = n.hub ? 0.85 : 0.5
        let r = n.r
        if (n.hub && !reduced) r += Math.sin(time / 700 + n.phase) * 0.5
        if (pointer.active) {
          const pd = Math.hypot(n.x - pointer.x, n.y - pointer.y)
          if (pd < CURSOR_RADIUS) {
            const k = 1 - pd / CURSOR_RADIUS
            alpha = Math.min(1, alpha + k * 0.5)
            r += k * 1.2
          }
        }
        if (n.hub) {
          ctx.fillStyle = brandColor(n.x / width, 0.12)
          ctx.beginPath()
          ctx.arc(n.x, n.y, r * 4, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.fillStyle = brandColor(n.x / width, alpha)
        ctx.beginPath()
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const loop = (time: number) => {
      draw(time)
      raf = requestAnimationFrame(loop)
    }
    const start = () => {
      if (running || reduced || !visible || document.hidden) return
      running = true
      raf = requestAnimationFrame(loop)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = e.clientX - rect.left
      pointer.y = e.clientY - rect.top
      pointer.active = pointer.y >= 0 && pointer.y <= rect.height
    }
    const onLeave = () => {
      pointer.active = false
    }
    const onVisibility = () => (document.hidden ? stop() : start())
    let resizeTimer = 0
    const onResize = () => {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(() => {
        resize()
        if (reduced) draw(0)
      }, 150)
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) start()
      else stop()
    })

    resize()
    if (reduced) draw(0)
    else start()
    io.observe(canvas)
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('resize', onResize)

    return () => {
      stop()
      io.disconnect()
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('resize', onResize)
      window.clearTimeout(resizeTimer)
    }
  }, [])

  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />
}
