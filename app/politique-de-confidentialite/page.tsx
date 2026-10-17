import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage, LegalSection } from '@/components/legal-page'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Comment les données personnelles sont collectées et utilisées sur le site de Nassim Belalia.',
  alternates: { canonical: '/politique-de-confidentialite' },
  robots: { index: false, follow: true },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPage eyebrow="Vos données" title="Politique de confidentialité" updatedAt="17 octobre 2026">
      <p className="leading-relaxed text-mute">Cette page explique quelles données sont collectées sur ce site, pourquoi, et comment exercer vos droits, conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.</p>

      <LegalSection title="Responsable du traitement">
        <p>Nassim Belalia, développeur full stack freelance, joignable à <a href={`mailto:${site.email}`}>{site.email}</a>. Les coordonnées complètes figurent dans les <Link href="/mentions-legales">mentions légales</Link>.</p>
      </LegalSection>

      <LegalSection title="Données collectées">
        <p>Les seules données personnelles collectées sont celles que vous saisissez dans le <strong>formulaire de contact</strong> :</p>
        <ul>
          <li>votre nom ;</li>
          <li>votre adresse email ;</li>
          <li>le type de projet ;</li>
          <li>le budget envisagé (facultatif) ;</li>
          <li>le contenu de votre message.</li>
        </ul>
        <p>Aucun compte utilisateur n&apos;est créé et aucune donnée n&apos;est collectée à votre insu.</p>
      </LegalSection>

      <LegalSection title="Finalité et base légale">
        <p>Ces données servent uniquement à répondre à votre demande et à échanger avec vous sur votre projet (devis, prise de contact). Elles ne sont jamais revendues ni utilisées pour de la prospection commerciale non sollicitée.</p>
        <p>Le traitement repose sur l&apos;exécution de mesures précontractuelles prises à votre demande (article 6.1.b du RGPD).</p>
      </LegalSection>

      <LegalSection title="Destinataires et sous-traitants">
        <p>Vos données sont destinées exclusivement à Nassim Belalia. Pour fonctionner, le site fait appel aux prestataires techniques suivants :</p>
        <ul>
          <li><strong>Netlify, Inc.</strong> : hébergement du site ;</li>
          <li><strong>Resend</strong> : acheminement des messages envoyés via le formulaire ;</li>
          <li><strong>OVHcloud</strong> : hébergement de la messagerie (serveurs en France).</li>
        </ul>
        <p>Ces prestataires peuvent traiter des données aux États-Unis. Ces transferts sont encadrés par des garanties appropriées (cadre de protection des données UE–États-Unis et/ou clauses contractuelles types de la Commission européenne).</p>
      </LegalSection>

      <LegalSection title="Durée de conservation">
        <p>Les messages sont conservés au maximum <strong>3 ans</strong> à compter du dernier échange, puis supprimés. Si une collaboration démarre, les données nécessaires sont conservées pendant la durée légale applicable aux documents commerciaux et comptables.</p>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>Ce site ne dépose <strong>aucun cookie</strong> et n&apos;utilise aucun outil de traçage ou de mesure d&apos;audience. Aucun bandeau de consentement n&apos;est donc nécessaire.</p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation, d&apos;opposition et de portabilité sur vos données. Pour les exercer, écrivez à <a href={`mailto:${site.email}`}>{site.email}</a>. Une réponse vous sera apportée sous un mois maximum.</p>
        <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">cnil.fr</a>, 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.</p>
      </LegalSection>

      <LegalSection title="Sécurité">
        <p>Le site est servi en HTTPS et les données du formulaire transitent de manière chiffrée. Seul Nassim Belalia a accès aux messages reçus.</p>
      </LegalSection>

      <LegalSection title="Modifications">
        <p>Cette politique peut être mise à jour pour refléter une évolution du site ou de la réglementation. La date de dernière mise à jour figure en haut de cette page.</p>
      </LegalSection>
    </LegalPage>
  )
}
