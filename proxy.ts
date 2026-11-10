import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'es'] as const

function preferredLocale(request: NextRequest): (typeof locales)[number] {
  const header = request.headers.get('accept-language') ?? ''
  const ranked = header
    .split(',')
    .map((part) => {
      const [tag, q] = part.trim().split(';q=')
      return { lang: tag.toLowerCase().slice(0, 2), q: q ? Number(q) : 1 }
    })
    .sort((a, b) => b.q - a.q)
  const match = ranked.find((r) => (locales as readonly string[]).includes(r.lang))
  return (match?.lang as (typeof locales)[number]) ?? 'en'
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  url.pathname = `/${preferredLocale(request)}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: '/',
}
