import Link from 'next/link'
import { ArrowUp, ArrowUpRight, Clock, Mail, MapPin, MessageCircle } from 'lucide-react'
import { Logo } from '@/components/logo'
import { legalLinks, navLinks, site, socials } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-[#17211c] text-[#f7f7f2]">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="dark" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
              Développeur full stack freelance à Avignon. Des produits web solides pour les indépendants et petites entreprises.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-xs text-white/70">
              <span className="size-2 rounded-full bg-[#a8c900] shadow-[0_0_0_4px_rgba(168,201,0,.2)]" />
              Disponible pour de nouveaux projets
            </div>
          </div>

          <FooterColumn title="Navigation">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={`/${link.href}`} className="transition-colors hover:text-white">{link.label}</Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Retrouvez-moi">
            {socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1.5 transition-colors hover:text-white">
                  {social.label}
                  <ArrowUpRight className="size-3.5 text-white/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d7f36b]" aria-hidden="true" />
                </a>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact">
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                <Mail className="size-4 text-white/40" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white">
                <MessageCircle className="size-4 text-white/40" aria-hidden="true" />
                WhatsApp : {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-white/40" aria-hidden="true" />
              {site.location}
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 text-white/40" aria-hidden="true" />
              Réponse sous 48h
            </li>
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-8 font-mono text-xs text-white/50 lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} {site.name} — Développeur Full Stack</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-[#d7f36b]">{link.label}</Link>
            ))}
            <a href="#top" className="inline-flex items-center gap-2 transition-colors hover:text-[#d7f36b]">
              Retour en haut <ArrowUp className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[.2em] text-[#d7f36b]">{title}</p>
      <ul className="mt-6 space-y-3 text-sm text-white/70">{children}</ul>
    </div>
  )
}
