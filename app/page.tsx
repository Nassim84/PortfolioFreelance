'use client'

import { FormEvent, useState } from 'react'
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Clock,
  Code2,
  FileText,
  Mail,
  MapPin,
  Menu,
  Send,
  X,
} from 'lucide-react'

const services = [
  { number: '01', title: 'Site vitrine', description: 'Une présence en ligne claire, rapide et pensée pour transformer vos visiteurs en clients.', tags: ['Next.js', 'SEO local', 'Responsive'] },
  { number: '02', title: 'Application métier', description: 'Des outils web sur mesure pour simplifier vos opérations et faire gagner du temps à vos équipes.', tags: ['React', 'API REST', 'Base de données'] },
  { number: '03', title: 'Refonte & maintenance', description: 'Je reprends votre existant, corrige ce qui bloque et le fais évoluer sans repartir de zéro.', tags: ['Audit', 'Symfony', 'ASP.NET'] },
]

const projects = [
  { title: 'Nom du projet 1', problem: '[Problème client à compléter]', solution: '[Solution apportée à compléter]', tags: ['Next.js', 'TypeScript'], link: '#' },
  { title: 'Nom du projet 2', problem: '[Problème client à compléter]', solution: '[Solution apportée à compléter]', tags: ['React', 'API REST'], link: '#' },
  { title: 'Site d’agence — prochainement', problem: '[Projet en préparation]', solution: '[Présentation à venir]', tags: ['Next.js', 'SEO'], link: '#', soon: true },
]

const faqs = [
  ['Quels types de projets acceptes-tu ?', 'Sites vitrines, applications métier, refontes et missions de maintenance pour indépendants et petites entreprises.'],
  ['Quels sont tes délais habituels ?', 'Ils dépendent du périmètre. Après un premier échange, je vous propose un planning réaliste et détaillé.'],
  ['Comment fonctionne la tarification ?', 'Devis au forfait ou TJM selon le projet. Le devis est gratuit et sans engagement.'],
  ['Comment se passe le paiement ?', "Un acompte puis le solde à la livraison, ou via la plateforme Malt/Codeur selon le projet."],
  ['Que se passe-t-il après la livraison ?', 'Une période de correction est prévue. Une maintenance peut aussi être mise en place si besoin.'],
  ['Peux-tu reprendre un projet existant ?', 'Oui. Je commence par un audit rapide pour comprendre la base et prioriser les améliorations.'],
  ['Travailles-tu à distance ?', 'Oui, je travaille à distance avec des points réguliers et des échanges simples.'],
]

const skills = ['React', 'Next.js', 'TypeScript', 'Symfony', 'ASP.NET / C#', 'Node.js', 'Docker', 'CI/CD']

const footerLinks = [
  ['Services', '#services'],
  ['Réalisations', '#realisations'],
  ['FAQ', '#faq'],
  ['Contact', '#contact'],
]

const socials = [
  { label: 'Malt', href: '#' },
  { label: 'Codeur.com', href: '#' },
  { label: 'GitHub', href: 'https://github.com/Nassim84' },
  { label: 'LinkedIn', href: '#' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formError, setFormError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      setFormError('Merci de compléter les champs obligatoires.')
      form.reportValidity()
      return
    }
    setFormError('')
    setSubmitted(true)
    form.reset()
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#f7f7f2] text-[#17211c] selection:bg-[#d7f36b] selection:text-[#17211c]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: 'Nassim Belalia', jobTitle: 'Développeur Full Stack freelance', address: { '@type': 'PostalAddress', addressLocality: 'Avignon', addressCountry: 'FR' }, url: 'https://github.com/Nassim84' }) }} />
      <header className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <nav className="flex items-center justify-between" aria-label="Navigation principale">
          <a href="#top" className="flex items-center gap-3 font-mono text-sm font-bold tracking-tight"><span className="flex size-9 items-center justify-center rounded-full bg-[#17211c] text-[#d7f36b]">NB</span><span>Nassim Belalia<span className="text-[#91a08f]">.dev</span></span></a>
          <div className="hidden items-center gap-7 text-sm font-medium md:flex"><a href="#services">Services</a><a href="#realisations">Réalisations</a><a href="#faq">FAQ</a><a href="#contact" className="rounded-full bg-[#17211c] px-5 py-3 text-[#f7f7f2]">Parlons de votre projet <ArrowRight className="ml-2 inline size-4" /></a></div>
          <button className="rounded-full p-2 md:hidden" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>
        {menuOpen && <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-[#dfe4d8] bg-white p-5 md:hidden"><a href="#services" onClick={closeMenu}>Services</a><a href="#realisations" onClick={closeMenu}>Réalisations</a><a href="#faq" onClick={closeMenu}>FAQ</a><a href="#contact" onClick={closeMenu}>Contact</a></div>}
      </header>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-10 lg:pb-32 lg:pt-24">
        <div><div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d9dfce] bg-white/70 px-4 py-2 font-mono text-xs font-medium text-[#61705d]"><span className="size-2 rounded-full bg-[#a8c900] shadow-[0_0_0_4px_#e8f1bc]" />Disponible pour de nouveaux projets</div><h1 className="max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-0.06em] sm:text-7xl lg:text-[clamp(4.5rem,7.6vw,7.5rem)]">Des produits web <span className="text-[#8fa800]">solides</span>, pas juste du code.</h1><p className="mt-8 max-w-xl text-lg leading-relaxed text-[#61705d]">Je suis Nassim, développeur full stack à Avignon. J’aide les indépendants et petites entreprises à transformer une idée ou un problème en outil web simple, rapide et utile.</p><div className="mt-9 flex flex-wrap items-center gap-4"><a href="#realisations" className="rounded-full bg-[#17211c] px-6 py-4 text-sm font-semibold text-white">Voir mes réalisations <ArrowRight className="ml-2 inline size-4" /></a><a href="#contact" className="rounded-full border border-[#cfd8c8] px-6 py-4 text-sm font-semibold">Me contacter</a></div><div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-[#7a8876]"><span>Avignon · Vaucluse</span><span>3 ans d&apos;expérience</span><span>Réponse sous 48h</span></div></div>
        <div className="relative min-h-[420px] lg:min-h-[560px]"><div className="absolute inset-6 rotate-3 rounded-[2rem] bg-[#d7f36b] lg:inset-10" /><div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-[#17211c] p-7 text-[#f7f7f2] shadow-2xl sm:p-10"><div className="flex items-center justify-between border-b border-white/15 pb-5 font-mono text-xs text-white/50"><span>portfolio.config.ts</span><span>01 / 04</span></div><div className="mt-12 font-mono text-sm leading-loose text-white/50"><span className="text-[#d7f36b]">const</span> developer = {'{'}<br /><span className="pl-5 text-[#d9a7ff]">name:</span> <span className="text-[#d7f36b]">&quot;Nassim&quot;</span>,<br /><span className="pl-5 text-[#d9a7ff]">role:</span> <span className="text-[#d7f36b]">&quot;Full Stack Dev&quot;</span>,<br /><span className="pl-5 text-[#d9a7ff]">location:</span> <span className="text-[#d7f36b]">&quot;Avignon, FR&quot;</span>,<br /><span className="pl-5 text-[#d9a7ff]">focus:</span> [<br /><span className="pl-10 text-[#f2c879]">&quot;clarity&quot;</span>, <span className="text-[#f2c879]">&quot;performance&quot;</span>, <span className="text-[#f2c879]">&quot;impact&quot;</span><br /><span className="pl-5">]</span><br />{' }'}</div><div className="absolute bottom-8 left-8 right-8 flex items-end justify-between sm:bottom-10 sm:left-10 sm:right-10"><div><p className="font-mono text-xs uppercase tracking-[.2em] text-[#d7f36b]">Build with purpose</p><p className="mt-2 text-2xl font-medium tracking-tight">Votre prochain projet<br />commence ici.</p></div><Code2 className="size-10 text-[#d7f36b]" strokeWidth={1} /></div></div></div>
      </section>

      <section id="services" className="border-y border-[#dfe4d8] bg-white/55"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="font-mono text-xs uppercase tracking-[.2em] text-[#8fa800]">Ce que je peux faire</p><h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Un renfort technique, sans le jargon.</h2></div><p className="max-w-sm text-sm leading-relaxed text-[#61705d]">Une collaboration directe, des choix expliqués et une attention particulière aux détails qui font la différence.</p></div><div className="grid gap-4 md:grid-cols-3">{services.map((service) => <article key={service.number} className="group rounded-3xl border border-[#dfe4d8] bg-[#f7f7f2] p-7 transition-all hover:-translate-y-1 hover:border-[#b9ce4b] hover:shadow-lg"><div className="flex items-center justify-between"><span className="font-mono text-sm text-[#8fa800]">{service.number}</span><ArrowRight className="size-5 -rotate-45 text-[#91a08f]" /></div><h3 className="mt-16 text-2xl font-semibold tracking-tight">{service.title}</h3><p className="mt-4 min-h-20 text-sm leading-relaxed text-[#61705d]">{service.description}</p><div className="mt-8 flex flex-wrap gap-2">{service.tags.map((tag) => <span key={tag} className="rounded-full bg-white px-3 py-1.5 font-mono text-[10px] text-[#61705d]">{tag}</span>)}</div></article>)}</div></div></section>

      <section id="realisations" className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><div className="mb-14"><p className="font-mono text-xs uppercase tracking-[.2em] text-[#8fa800]">Réalisations</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Des projets à découvrir.</h2><p className="mt-5 max-w-xl text-[#61705d]">Les projets seront ajoutés au fil de leur publication. Les informations entre crochets sont à remplacer.</p></div><div className="grid gap-5 md:grid-cols-3">{projects.map((project) => <article key={project.title} className="rounded-3xl border border-[#dfe4d8] bg-white/60 p-4"><div className="flex aspect-video items-center justify-center rounded-2xl bg-[#e7e9e1] font-mono text-xs text-[#7a8876]">[Image du projet — 16:9]</div><div className="p-3 pt-6"><div className="flex items-start justify-between gap-3"><h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>{project.soon && <span className="shrink-0 rounded-full bg-[#d7f36b] px-2 py-1 font-mono text-[9px] uppercase">Bientôt</span>}</div><p className="mt-5 text-sm text-[#61705d]"><strong className="text-[#17211c]">Problème</strong> {project.problem}</p><p className="mt-2 text-sm text-[#61705d]"><strong className="text-[#17211c]">Solution</strong> {project.solution}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-[#f0f2eb] px-3 py-1.5 font-mono text-[10px]">{tag}</span>)}</div><a href={project.link} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline decoration-[#b9ce4b] decoration-2 underline-offset-4">Voir le projet <ArrowRight className="size-4" /></a></div></article>)}</div></section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><div className="mb-12"><p className="font-mono text-xs uppercase tracking-[.2em] text-[#8fa800]">Méthode de travail</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Simple, lisible, efficace.</h2></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{['Échange et cadrage', 'Devis clair', 'Développement avec points réguliers', 'Livraison et suivi'].map((step, index) => <div key={step} className="rounded-3xl border border-[#dfe4d8] p-6"><span className="font-mono text-sm text-[#8fa800]">0{index + 1}</span><h3 className="mt-12 text-xl font-semibold">{step}</h3></div>)}</div></section>

      <section className="bg-[#17211c] text-[#f7f7f2]"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="font-mono text-xs uppercase tracking-[.2em] text-[#d7f36b]">Stack quotidienne</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">Les bons outils, au bon endroit.</h2></div><div className="flex max-w-lg flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-full border border-white/15 px-4 py-2 font-mono text-xs text-white/70">{skill}</span>)}</div></div></div></section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="font-mono text-xs uppercase tracking-[.2em] text-[#8fa800]">FAQ</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Les questions fréquentes.</h2></div><div className="divide-y divide-[#dfe4d8] border-y border-[#dfe4d8]">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold marker:content-none"><span>{question}</span><span className="font-mono text-xl text-[#8fa800] group-open:rotate-45">+</span></summary><p className="max-w-2xl pt-4 text-sm leading-relaxed text-[#61705d]">{answer}</p></details>)}</div></div></section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><div className="grid gap-10 rounded-[2rem] bg-[#d7f36b] p-8 sm:p-12 lg:grid-cols-[.9fr_1.1fr] lg:p-16"><div><p className="font-mono text-xs uppercase tracking-[.2em] text-[#617500]">Un projet en tête ?</p><h2 className="mt-4 max-w-xl text-5xl font-semibold leading-none tracking-[-.06em] sm:text-7xl">Faisons quelque chose d&apos;utile.</h2><p className="mt-6 max-w-lg leading-relaxed text-[#4f5d2a]">Expliquez-moi votre besoin en quelques lignes. Je vous réponds personnellement avec une première piste et les prochaines étapes.</p><a href="mailto:belalianassim@gmail.com" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold underline"><Mail className="size-4" />belalianassim@gmail.com</a></div><form onSubmit={handleSubmit} className="rounded-3xl bg-[#f7f7f2] p-6 sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">Nom<input name="name" required className="mt-2 w-full rounded-xl border border-[#cfd8c8] bg-white px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#8fa800]" /></label><label className="text-sm font-semibold">Email<input name="email" type="email" required className="mt-2 w-full rounded-xl border border-[#cfd8c8] bg-white px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#8fa800]" /></label></div><label className="mt-5 block text-sm font-semibold">Type de projet<select name="project" required defaultValue="" className="mt-2 w-full rounded-xl border border-[#cfd8c8] bg-white px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#8fa800]"><option value="" disabled>Choisir une option</option><option>Site vitrine</option><option>Application métier</option><option>Refonte ou maintenance</option><option>Autre besoin</option></select></label><label className="mt-5 block text-sm font-semibold">Message<textarea name="message" required rows={5} className="mt-2 w-full resize-none rounded-xl border border-[#cfd8c8] bg-white px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#8fa800]" /></label>{formError && <p className="mt-4 text-sm text-red-700" role="alert">{formError}</p>}{submitted && <p className="mt-4 text-sm font-semibold text-[#4f5d2a]" role="status">Merci, votre message est prêt. Écrivez-moi directement à belalianassim@gmail.com pour finaliser l&apos;envoi.</p>}<button type="submit" className="mt-6 inline-flex items-center rounded-full bg-[#17211c] px-6 py-4 text-sm font-semibold text-white"><Send className="mr-2 size-4" />Envoyer</button></form></div></section>

      <footer className="bg-[#17211c] text-[#f7f7f2]">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 lg:px-10">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
            <div>
              <a href="#top" className="flex items-center gap-3 font-mono text-sm font-bold tracking-tight"><span className="flex size-9 items-center justify-center rounded-full bg-[#d7f36b] text-[#17211c]">NB</span><span>Nassim Belalia<span className="text-white/40">.dev</span></span></a>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">Développeur full stack freelance à Avignon. Des produits web solides pour les indépendants et petites entreprises.</p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-xs text-white/70"><span className="size-2 rounded-full bg-[#a8c900] shadow-[0_0_0_4px_rgba(168,201,0,.2)]" />Disponible pour de nouveaux projets</div>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[.2em] text-[#d7f36b]">Navigation</p>
              <ul className="mt-6 space-y-3 text-sm text-white/70">{footerLinks.map(([label, href]) => <li key={href}><a href={href} className="transition-colors hover:text-white">{label}</a></li>)}</ul>
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

          <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-8 font-mono text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Nassim Belalia — Développeur Full Stack</p>
            <a href="#top" className="inline-flex items-center gap-2 transition-colors hover:text-[#d7f36b]">Retour en haut <ArrowUp className="size-3.5" aria-hidden="true" /></a>
          </div>
        </div>
      </footer>
    </main>
  )
}
