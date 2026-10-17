import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { projects, type Project } from '@/lib/content'

export function Projects() {
  return (
    <section id="realisations" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionHeading
        eyebrow="Réalisations"
        title="Des projets à découvrir."
        aside="Une sélection de projets récents, du site vitrine à l’outil sur mesure pour une collectivité."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-3xl border border-line bg-surface/60 p-4">
      {project.image ? (
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-chip">
          <Image
            src={project.image}
            alt={`Capture d’écran du site ${project.title}`}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      ) : (
        <div className="flex aspect-video items-center justify-center rounded-2xl bg-inverse font-mono text-xs text-[#d7f36b]">
          {project.soon ? 'En préparation' : 'Capture à venir'}
        </div>
      )}

      <div className="p-3 pt-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
          {project.soon && (
            <span className="shrink-0 rounded-full bg-lime px-2 py-1 text-[#17211c] font-mono text-[9px] uppercase">Bientôt</span>
          )}
        </div>

        <p className="mt-5 text-sm text-mute">
          <strong className="text-ink">Problème</strong> {project.problem}
        </p>
        <p className="mt-2 text-sm text-mute">
          <strong className="text-ink">Solution</strong> {project.solution}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-chip px-3 py-1.5 font-mono text-[10px]">{tag}</span>
          ))}
        </div>

        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline decoration-brand-line decoration-2 underline-offset-4">
            Voir le site <ArrowRight className="size-4" />
          </a>
        )}
      </div>
    </article>
  )
}
