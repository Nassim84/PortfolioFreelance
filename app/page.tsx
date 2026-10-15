'use client'

import { FormEvent, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Code2,
  Mail,
  Menu,
  Send,
  X,
} from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'

const services = [
  { number: '01', title: 'Site vitrine', description: 'Une présence en ligne claire, rapide et pensée pour transformer vos visiteurs en clients.', tags: ['Next.js', 'SEO local', 'Responsive'] },
  { number: '02', title: 'Application métier', description: 'Des outils web sur mesure pour simplifier vos opérations et faire gagner du temps à vos équipes.', tags: ['React', 'API REST', 'Base de données'] },
  { number: '03', title: 'Refonte & maintenance', description: 'Je reprends votre existant, corrige ce qui bloque et le fais évoluer sans repartir de zéro.', tags: ['Audit', 'Symfony', 'ASP.NET'] },
]

type Project = {
  title: string
  problem: string
  solution: string
  tags: string[]
  link?: string
  image?: string
  soon?: boolean
}

const projects: Project[] = [
  { title: 'Ned Driver — VTC en Provence', problem: 'Un chauffeur VTC indépendant à Avignon avait besoin d’être trouvé en ligne et de recevoir ses demandes de course directement, sans passer par une plateforme.', solution: 'Un site vitrine rapide et optimisé pour le référencement local, avec formulaire de demande de devis, destinations phares et avis clients.', tags: ['Next.js', 'SEO local', 'Responsive'], link: 'https://ndrive.fr/', image: '/projects/ndrive.png' },
  { title: 'Acteurs QPV du Grand Avignon', problem: 'Les professionnels qui interviennent dans les quartiers prioritaires du Grand Avignon avaient du mal à identifier les structures déjà actives auprès des habitants.', solution: 'Un annuaire en ligne avec cartographie des acteurs, recherche et filtres par thématique, quartier et acteur, dans le cadre du programme Quartiers 2030.', tags: ['Next.js', 'Cartographie', 'Filtres'], link: 'https://acteurs-qpv-grandavignon.fr/', image: '/projects/acteurs-qpv.png' },
  { title: 'Studio web en duo', problem: 'Beaucoup de commerçants, artisans et associations n’ont toujours pas de site, souvent par manque de temps ou par peur du coût.', solution: 'Avec un associé, nous préparons une offre de sites simples, abordables et livrés rapidement, pensée pour ceux qui partent de zéro.', tags: ['Next.js', 'Offre clé en main'], soon: true },
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

      <section id="realisations" className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><div className="mb-14"><p className="font-mono text-xs uppercase tracking-[.2em] text-[#8fa800]">Réalisations</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Des projets à découvrir.</h2><p className="mt-5 max-w-xl text-[#61705d]">Une sélection de projets récents, du site vitrine à l’outil sur mesure pour une collectivité.</p></div><div className="grid gap-5 md:grid-cols-3">{projects.map((project) => <article key={project.title} className="rounded-3xl border border-[#dfe4d8] bg-white/60 p-4">{project.image ? <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#e7e9e1]"><Image src={project.image} alt={`Capture d’écran du site ${project.title}`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover object-top" /></div> : <div className="flex aspect-video items-center justify-center rounded-2xl bg-[#17211c] font-mono text-xs text-[#d7f36b]">{project.soon ? 'En préparation' : 'Capture à venir'}</div>}<div className="p-3 pt-6"><div className="flex items-start justify-between gap-3"><h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>{project.soon && <span className="shrink-0 rounded-full bg-[#d7f36b] px-2 py-1 font-mono text-[9px] uppercase">Bientôt</span>}</div><p className="mt-5 text-sm text-[#61705d]"><strong className="text-[#17211c]">Problème</strong> {project.problem}</p><p className="mt-2 text-sm text-[#61705d]"><strong className="text-[#17211c]">Solution</strong> {project.solution}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-[#f0f2eb] px-3 py-1.5 font-mono text-[10px]">{tag}</span>)}</div>{project.link && <a href={project.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline decoration-[#b9ce4b] decoration-2 underline-offset-4">Voir le site <ArrowRight className="size-4" /></a>}</div></article>)}</div></section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><div className="mb-12"><p className="font-mono text-xs uppercase tracking-[.2em] text-[#8fa800]">Méthode de travail</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Simple, lisible, efficace.</h2></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{['Échange et cadrage', 'Devis clair', 'Développement avec points réguliers', 'Livraison et suivi'].map((step, index) => <div key={step} className="rounded-3xl border border-[#dfe4d8] p-6"><span className="font-mono text-sm text-[#8fa800]">0{index + 1}</span><h3 className="mt-12 text-xl font-semibold">{step}</h3></div>)}</div></section>

      <section className="bg-[#17211c] text-[#f7f7f2]"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="font-mono text-xs uppercase tracking-[.2em] text-[#d7f36b]">Stack quotidienne</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">Les bons outils, au bon endroit.</h2></div><div className="flex max-w-lg flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-full border border-white/15 px-4 py-2 font-mono text-xs text-white/70">{skill}</span>)}</div></div></div></section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="font-mono text-xs uppercase tracking-[.2em] text-[#8fa800]">FAQ</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Les questions fréquentes.</h2></div><div className="divide-y divide-[#dfe4d8] border-y border-[#dfe4d8]">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold marker:content-none"><span>{question}</span><span className="font-mono text-xl text-[#8fa800] group-open:rotate-45">+</span></summary><p className="max-w-2xl pt-4 text-sm leading-relaxed text-[#61705d]">{answer}</p></details>)}</div></div></section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><div className="grid gap-10 rounded-[2rem] bg-[#d7f36b] p-8 sm:p-12 lg:grid-cols-[.9fr_1.1fr] lg:p-16"><div><p className="font-mono text-xs uppercase tracking-[.2em] text-[#617500]">Un projet en tête ?</p><h2 className="mt-4 max-w-xl text-5xl font-semibold leading-none tracking-[-.06em] sm:text-7xl">Faisons quelque chose d&apos;utile.</h2><p className="mt-6 max-w-lg leading-relaxed text-[#4f5d2a]">Expliquez-moi votre besoin en quelques lignes. Je vous réponds personnellement avec une première piste et les prochaines étapes.</p><a href="mailto:belalianassim@gmail.com" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold underline"><Mail className="size-4" />belalianassim@gmail.com</a></div><form onSubmit={handleSubmit} className="rounded-3xl bg-[#f7f7f2] p-6 sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">Nom<input name="name" required className="mt-2 w-full rounded-xl border border-[#cfd8c8] bg-white px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#8fa800]" /></label><label className="text-sm font-semibold">Email<input name="email" type="email" required className="mt-2 w-full rounded-xl border border-[#cfd8c8] bg-white px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#8fa800]" /></label></div><label className="mt-5 block text-sm font-semibold">Type de projet<select name="project" required defaultValue="" className="mt-2 w-full rounded-xl border border-[#cfd8c8] bg-white px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#8fa800]"><option value="" disabled>Choisir une option</option><option>Site vitrine</option><option>Application métier</option><option>Refonte ou maintenance</option><option>Autre besoin</option></select></label><label className="mt-5 block text-sm font-semibold">Message<textarea name="message" required rows={5} className="mt-2 w-full resize-none rounded-xl border border-[#cfd8c8] bg-white px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-[#8fa800]" /></label>{formError && <p className="mt-4 text-sm text-red-700" role="alert">{formError}</p>}{submitted && <p className="mt-4 text-sm font-semibold text-[#4f5d2a]" role="status">Merci, votre message est prêt. Écrivez-moi directement à belalianassim@gmail.com pour finaliser l&apos;envoi.</p>}<button type="submit" className="mt-6 inline-flex items-center rounded-full bg-[#17211c] px-6 py-4 text-sm font-semibold text-white"><Send className="mr-2 size-4" />Envoyer</button><p className="mt-4 text-xs leading-relaxed text-[#7a8876]">Vos informations servent uniquement à répondre à votre demande. Pour en savoir plus et exercer vos droits, consultez la <Link href="/politique-de-confidentialite" className="underline underline-offset-2">politique de confidentialité</Link>.</p></form></div></section>

      <SiteFooter />
    </main>
  )
}
