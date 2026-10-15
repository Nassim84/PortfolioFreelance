import { Contact } from '@/components/sections/contact'
import { Faq } from '@/components/sections/faq'
import { Hero } from '@/components/sections/hero'
import { Method } from '@/components/sections/method'
import { Projects } from '@/components/sections/projects'
import { Services } from '@/components/sections/services'
import { SiteHeader } from '@/components/sections/site-header'
import { Stack } from '@/components/sections/stack'
import { SiteFooter } from '@/components/site-footer'
import { site } from '@/lib/site'

// Données structurées pour Google (fiche "Personne").
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: 'Développeur Full Stack freelance',
  address: { '@type': 'PostalAddress', addressLocality: 'Avignon', addressCountry: 'FR' },
  url: site.github,
}

export default function Page() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#f7f7f2] text-[#17211c] selection:bg-[#d7f36b] selection:text-[#17211c]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader />
      <Hero />
      <Services />
      <Projects />
      <Method />
      <Stack />
      <Faq />
      <Contact />
      <SiteFooter />
    </main>
  )
}
