import en, { type Dictionary } from '@/content/en'
import es from '@/content/es'

export const locales = ['en', 'es'] as const
export type Locale = (typeof locales)[number]

const dictionaries: Record<Locale, Dictionary> = { en, es }

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value)

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale]

export const otherLocale = (locale: Locale): Locale => (locale === 'en' ? 'es' : 'en')

export const SITE_URL = 'https://avilasystems.dev'
export const EMAIL = 'alvaro@avilasystems.dev'
export const LINKEDIN = 'https://www.linkedin.com/in/avila-alvaro/'
export const GITHUB = 'https://github.com/almiavicas'
