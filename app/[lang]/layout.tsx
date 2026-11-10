import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'
import { SITE_URL, getDictionary, hasLocale, locales } from '@/lib/i18n'
import '../globals.css'

const sans = Geist({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export const viewport: Viewport = {
  themeColor: '#05060a',
  colorScheme: 'dark',
}

export async function generateMetadata({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const { meta } = getDictionary(lang)
  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { en: '/en', es: '/es', 'x-default': '/en' },
    },
    openGraph: {
      type: 'website',
      siteName: 'Avila Systems',
      title: meta.title,
      description: meta.description,
      url: `/${lang}`,
      locale: lang === 'es' ? 'es_VE' : 'en_US',
    },
    twitter: { card: 'summary_large_image', title: meta.title, description: meta.description },
  }
}

// Runs before first paint: marks JS as available so intro animations can start from a hidden state.
const bootScript = `document.documentElement.classList.add('js')`

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  return (
    <html lang={lang} className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
