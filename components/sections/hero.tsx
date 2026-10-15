import { ArrowRight, Code2 } from 'lucide-react'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-10 lg:pb-32 lg:pt-24">
      <div>
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d9dfce] bg-white/70 px-4 py-2 font-mono text-xs font-medium text-[#61705d]">
          <span className="size-2 rounded-full bg-[#a8c900] shadow-[0_0_0_4px_#e8f1bc]" />
          Disponible pour de nouveaux projets
        </div>

        <h1 className="max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-0.06em] sm:text-7xl lg:text-[clamp(4.5rem,7.6vw,7.5rem)]">
          Des produits web <span className="text-[#8fa800]">solides</span>, pas juste du code.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#61705d]">
          Je suis Nassim, développeur full stack à Avignon. J’aide les indépendants et petites entreprises à transformer une idée ou un problème en outil web simple, rapide et utile.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a href="#realisations" className="rounded-full bg-[#17211c] px-6 py-4 text-sm font-semibold text-white">
            Voir mes réalisations <ArrowRight className="ml-2 inline size-4" />
          </a>
          <a href="#contact" className="rounded-full border border-[#cfd8c8] px-6 py-4 text-sm font-semibold">
            Me contacter
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-[#7a8876]">
          <span>{site.location}</span>
          <span>3 ans d&apos;expérience</span>
          <span>Réponse sous 48h</span>
        </div>
      </div>

      <CodeCard />
    </section>
  )
}

function CodeCard() {
  return (
    <div className="relative min-h-[420px] lg:min-h-[560px]">
      <div className="absolute inset-6 rotate-3 rounded-[2rem] bg-[#d7f36b] lg:inset-10" />

      <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-[#17211c] p-7 text-[#f7f7f2] shadow-2xl sm:p-10">
        <div className="flex items-center justify-between border-b border-white/15 pb-5 font-mono text-xs text-white/50">
          <span>portfolio.config.ts</span>
          <span>01 / 04</span>
        </div>

        <div className="mt-12 font-mono text-sm leading-loose text-white/50">
          <span className="text-[#d7f36b]">const</span> developer = {'{'}<br />
          <span className="pl-5 text-[#d9a7ff]">name:</span> <span className="text-[#d7f36b]">&quot;Nassim&quot;</span>,<br />
          <span className="pl-5 text-[#d9a7ff]">role:</span> <span className="text-[#d7f36b]">&quot;Full Stack Dev&quot;</span>,<br />
          <span className="pl-5 text-[#d9a7ff]">location:</span> <span className="text-[#d7f36b]">&quot;Avignon, FR&quot;</span>,<br />
          <span className="pl-5 text-[#d9a7ff]">focus:</span> [<br />
          <span className="pl-10 text-[#f2c879]">&quot;clarity&quot;</span>, <span className="text-[#f2c879]">&quot;performance&quot;</span>, <span className="text-[#f2c879]">&quot;impact&quot;</span><br />
          <span className="pl-5">]</span><br />
          {' }'}
        </div>

        <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between sm:bottom-10 sm:left-10 sm:right-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.2em] text-[#d7f36b]">Build with purpose</p>
            <p className="mt-2 text-2xl font-medium tracking-tight">Votre prochain projet<br />commence ici.</p>
          </div>
          <Code2 className="size-10 text-[#d7f36b]" strokeWidth={1} />
        </div>
      </div>
    </div>
  )
}
