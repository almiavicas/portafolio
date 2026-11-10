import { notFound } from 'next/navigation'
import { getDictionary, hasLocale, otherLocale } from '@/lib/i18n'
import { Header } from '@/components/Header'
import { Motion } from '@/components/Motion'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { Problems } from '@/components/sections/Problems'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { Work } from '@/components/sections/Work'
import { StackMarquee } from '@/components/sections/StackMarquee'
import { Founder } from '@/components/sections/Founder'
import { Agencies } from '@/components/sections/Agencies'
import { Faq } from '@/components/sections/Faq'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default async function Home({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const t = getDictionary(lang)

  return (
    <>
      <a href="#main" className="skip-link">
        {t.nav.skip}
      </a>
      <Header t={t.nav} lang={lang} other={otherLocale(lang)} />
      <main id="main">
        <Hero t={t.hero} />
        <Stats stats={t.stats} label={t.statsLabel} />
        <Problems t={t.problems} />
        <Services t={t.services} />
        <Process t={t.process} />
        <Work t={t.work} />
        <StackMarquee label={t.stack.label} />
        <Founder t={t.founder} />
        <Agencies t={t.agencies} />
        <Faq t={t.faq} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} nav={t.nav} />
      <Motion />
    </>
  )
}
