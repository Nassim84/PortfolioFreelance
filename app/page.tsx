import type { Metadata } from 'next'
import { Contact } from '@/components/sections/contact'
import { Faq } from '@/components/sections/faq'
import { Hero } from '@/components/sections/hero'
import { Method } from '@/components/sections/method'
import { Projects } from '@/components/sections/projects'
import { Services } from '@/components/sections/services'
import { SiteHeader } from '@/components/sections/site-header'
import { Stack } from '@/components/sections/stack'
import { SiteFooter } from '@/components/site-footer'
import { faqs, services, skills } from '@/lib/content'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

// Données structurées pour Google : site, développeur, activité locale et FAQ.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: `${site.name} — ${site.businessName}`,
      inLanguage: 'fr-FR',
      publisher: { '@id': `${site.url}/#business` },
    },
    {
      '@type': 'Person',
      '@id': `${site.url}/#person`,
      name: site.name,
      jobTitle: 'Développeur Full Stack freelance',
      url: site.url,
      email: site.email,
      telephone: '+33767972307',
      address: { '@type': 'PostalAddress', addressLocality: 'Avignon', postalCode: '84000', addressCountry: 'FR' },
      knowsAbout: skills,
      knowsLanguage: ['fr', 'en', 'es', 'ar'],
      worksFor: { '@id': `${site.url}/#business` },
      sameAs: [site.github, site.malt],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${site.url}/#business`,
      name: site.businessName,
      description: site.description,
      url: site.url,
      image: `${site.url}/opengraph-image`,
      email: site.email,
      telephone: '+33767972307',
      priceRange: '€€',
      founder: { '@id': `${site.url}/#person` },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Avignon',
        postalCode: '84000',
        addressRegion: 'Provence-Alpes-Côte d’Azur',
        addressCountry: 'FR',
      },
      areaServed: ['Avignon', 'Vaucluse', 'Gard', 'Bouches-du-Rhône', 'France'].map((name) => ({ '@type': 'Place', name })),
      sameAs: [site.github, site.malt],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services de développement web',
        itemListElement: services.map((service) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: service.title, description: service.description },
        })),
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${site.url}/#faq`,
      mainEntity: faqs.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
}

export default function Page() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-paper text-ink selection:bg-[#d7f36b] selection:text-[#17211c]">
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
