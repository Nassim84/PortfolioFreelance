import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { services } from '@/lib/content'

export function Services() {
  return (
    <section id="services" className="border-y border-line bg-surface/55">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <SectionHeading
          eyebrow="Ce que je peux faire"
          title="Un renfort technique, sans le jargon."
          aside="Une collaboration directe, des choix expliqués et une attention particulière aux détails qui font la différence."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="group rounded-3xl border border-line bg-paper p-7 transition-all hover:-translate-y-1 hover:border-brand-line hover:shadow-lg">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-brand">{service.number}</span>
                <ArrowRight className="size-5 -rotate-45 text-faint" />
              </div>
              <h3 className="mt-16 text-2xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-4 min-h-20 text-sm leading-relaxed text-mute">{service.description}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-surface px-3 py-1.5 font-mono text-[10px] text-mute">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
