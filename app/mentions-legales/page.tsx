import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPage, LegalSection } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site de Nassim Belalia, développeur full stack freelance à Avignon.',
  alternates: { canonical: '/mentions-legales' },
  robots: { index: false, follow: true },
}

export default function MentionsLegalesPage() {
  return (
    <LegalPage eyebrow="Informations légales" title="Mentions légales" updatedAt="15 octobre 2026">
      <p className="leading-relaxed text-mute">Conformément à l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique (LCEN), voici les informations relatives à l&apos;éditeur et à l&apos;hébergeur de ce site.</p>

      <LegalSection title="Éditeur du site">
        <ul>
          <li><strong>Nom :</strong> Nassim Belalia EI</li>
          <li><strong>Nom commercial :</strong> NB FullStack</li>
          <li><strong>Statut :</strong> Entrepreneur individuel (micro-entreprise)</li>
          <li><strong>SIRET :</strong> 109 037 051 00017</li>
          <li><strong>RCS :</strong> 109 037 051 R.C.S. Avignon</li>
          <li><strong>Siège :</strong> Avignon (84000), France</li>
          <li><strong>Téléphone :</strong> <a href="tel:+33767972307">07 67 97 23 07</a></li>
          <li><strong>Email :</strong> <a href="mailto:belalianassim@gmail.com">belalianassim@gmail.com</a></li>
          <li><strong>WhatsApp :</strong> <a href="https://wa.me/33767972307" target="_blank" rel="noreferrer">07 67 97 23 07</a></li>
          <li><strong>N° TVA intracommunautaire :</strong> FR05109037051</li>
          <li><strong>TVA :</strong> TVA non applicable, art. 293 B du CGI</li>
        </ul>
        <p><strong>Directeur de la publication :</strong> Nassim Belalia</p>
      </LegalSection>

      <LegalSection title="Hébergeur">
        <ul>
          <li><strong>Netlify, Inc.</strong></li>
          <li>101 2nd Street, San Francisco, CA 94105, États-Unis</li>
          <li>Site web : <a href="https://www.netlify.com" target="_blank" rel="noreferrer">netlify.com</a></li>
        </ul>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>L&apos;ensemble du contenu de ce site (textes, visuels, logo, code, mise en page) est la propriété de Nassim Belalia, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite.</p>
        <p>Les projets présentés dans la section Réalisations restent la propriété de leurs clients respectifs et sont affichés avec leur accord.</p>
      </LegalSection>

      <LegalSection title="Responsabilité">
        <p>Les informations publiées sur ce site sont fournies à titre indicatif et peuvent évoluer. Malgré le soin apporté à leur rédaction, Nassim Belalia ne saurait être tenu responsable d&apos;erreurs, d&apos;omissions ou d&apos;une indisponibilité temporaire du site.</p>
        <p>Ce site peut contenir des liens vers des sites tiers (GitHub, LinkedIn, Malt…). Leur contenu ne relève pas de la responsabilité de l&apos;éditeur.</p>
      </LegalSection>

      <LegalSection title="Données personnelles">
        <p>Le traitement des données transmises via le formulaire de contact est détaillé dans la <Link href="/politique-de-confidentialite">politique de confidentialité</Link>.</p>
      </LegalSection>

      <LegalSection title="Droit applicable">
        <p>Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.</p>
      </LegalSection>
    </LegalPage>
  )
}
