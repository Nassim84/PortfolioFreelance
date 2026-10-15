import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Logo } from '@/components/logo'
import { SiteFooter } from '@/components/site-footer'

type LegalPageProps = {
  eyebrow: string
  title: string
  updatedAt: string
  children: React.ReactNode
}

export function LegalPage({ eyebrow, title, updatedAt, children }: LegalPageProps) {
  return (
    <main id="top" className="min-h-screen bg-[#f7f7f2] text-[#17211c] selection:bg-[#d7f36b] selection:text-[#17211c]">
      <header className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <nav className="flex items-center justify-between" aria-label="Navigation principale">
          <Logo />
          <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-[#cfd8c8] px-5 py-3 text-sm font-semibold"><ArrowLeft className="size-4" aria-hidden="true" />Retour à l&apos;accueil</Link>
        </nav>
      </header>

      <article className="mx-auto max-w-3xl px-6 pb-24 pt-16 lg:pt-24">
        <p className="font-mono text-xs uppercase tracking-[.2em] text-[#8fa800]">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-6xl">{title}</h1>
        <p className="mt-6 font-mono text-xs text-[#7a8876]">Dernière mise à jour : {updatedAt}</p>
        <div className="mt-14 space-y-12">{children}</div>
      </article>

      <SiteFooter />
    </main>
  )
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-[#dfe4d8] pt-10">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-5 space-y-4 leading-relaxed text-[#61705d] [&_a]:font-medium [&_a]:text-[#17211c] [&_a]:underline [&_a]:decoration-[#b9ce4b] [&_a]:decoration-2 [&_a]:underline-offset-4 [&_li]:pl-1 [&_strong]:text-[#17211c] [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">{children}</div>
    </section>
  )
}
