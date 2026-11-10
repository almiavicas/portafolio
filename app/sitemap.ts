import type { MetadataRoute } from 'next'
import { SITE_URL, locales } from '@/lib/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((lang) => ({
    url: `${SITE_URL}/${lang}`,
    changeFrequency: 'monthly',
    priority: lang === 'en' ? 1 : 0.8,
    alternates: { languages: { en: `${SITE_URL}/en`, es: `${SITE_URL}/es` } },
  }))
}
