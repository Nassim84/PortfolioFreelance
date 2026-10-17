import { SectionHeading } from '@/components/section-heading'
import { steps } from '@/lib/content'

export function Method() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <SectionHeading
          eyebrow="Méthode de travail"
          title="Simple, lisible, efficace."
          aside="Pas d'effet tunnel : vous savez à chaque étape où en est votre projet, ce qui a été fait et ce qui arrive ensuite."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col rounded-3xl border border-line bg-paper p-6">
              <span className="font-mono text-sm text-brand">0{index + 1}</span>
              <h3 className="mt-12 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
