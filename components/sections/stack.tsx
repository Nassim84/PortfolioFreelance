import { skills } from '@/lib/content'

export function Stack() {
  return (
    <section className="bg-[#17211c] text-[#f7f7f2]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.2em] text-[#d7f36b]">Stack quotidienne</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">Les bons outils, au bon endroit.</h2>
          </div>

          <div className="flex max-w-lg flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-white/15 px-4 py-2 font-mono text-xs text-white/70">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
