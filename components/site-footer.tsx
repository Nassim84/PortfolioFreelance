import Link from 'next/link'
import { ArrowUp, ArrowUpRight, Clock, FileText, Mail, MapPin } from 'lucide-react'

const footerLinks = [
  ['Services', '/#services'],
  ['Réalisations', '/#realisations'],
  ['FAQ', '/#faq'],
  ['Contact', '/#contact'],
]

const socials = [
  { label: 'Malt', href: '#' },
  { label: 'Codeur.com', href: '#' },
  { label: 'GitHub', href: 'https://github.com/Nassim84' },
  { label: 'LinkedIn', href: '#' },
]

const legalLinks = [
  ['Mentions légales', '/mentions-legales'],
  ['Politique de confidentialité', '/politique-de-confidentialite'],
]

export function SiteFooter() {
  return (
    <footer className="bg-[#17211c] text-[#f7f7f2]">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-3 font-mono text-sm font-bold tracking-tight"><span className="flex size-9 items-center justify-center rounded-full bg-[#d7f36b] text-[#17211c]">NB</span><span>Nassim Belalia<span className="text-white/40">.dev</span></span></Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">Développeur full stack freelance à Avignon. Des produits web solides pour les indépendants et petites entreprises.</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-xs text-white/70"><span className="size-2 rounded-full bg-[#a8c900] shadow-[0_0_0_4px_rgba(168,201,0,.2)]" />Disponible pour de nouveaux projets</div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[.2em] text-[#d7f36b]">Navigation</p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">{footerLinks.map(([label, href]) => <li key={href}><Link href={href} className="transition-colors hover:text-white">{label}</Link></li>)}</ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[.2em] text-[#d7f36b]">Retrouvez-moi</p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">{socials.map((social) => <li key={social.label}><a href={social.href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1.5 transition-colors hover:text-white">{social.label}<ArrowUpRight className="size-3.5 text-white/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d7f36b]" aria-hidden="true" /></a></li>)}</ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[.2em] text-[#d7f36b]">Contact</p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li><a href="mailto:belalianassim@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-white"><Mail className="size-4 text-white/40" aria-hidden="true" />belalianassim@gmail.com</a></li>
              <li className="flex items-center gap-2"><MapPin className="size-4 text-white/40" aria-hidden="true" />Avignon · Vaucluse</li>
              <li className="flex items-center gap-2"><Clock className="size-4 text-white/40" aria-hidden="true" />Réponse sous 48h</li>
              <li><a href="#" className="inline-flex items-center gap-2 transition-colors hover:text-white"><FileText className="size-4 text-white/40" aria-hidden="true" />Télécharger mon CV</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-8 font-mono text-xs text-white/50 lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} Nassim Belalia — Développeur Full Stack</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {legalLinks.map(([label, href]) => <Link key={href} href={href} className="transition-colors hover:text-[#d7f36b]">{label}</Link>)}
            <a href="#top" className="inline-flex items-center gap-2 transition-colors hover:text-[#d7f36b]">Retour en haut <ArrowUp className="size-3.5" aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
