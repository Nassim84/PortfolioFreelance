type SectionHeadingProps = {
  eyebrow: string
  title: string
  aside?: string
}

// Titre de section : petit sur-titre vert, grand titre, et texte optionnel à droite.
export function SectionHeading({ eyebrow, title, aside }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <p className="font-mono text-xs uppercase tracking-[.2em] text-brand">{eyebrow}</p>
        <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-.04em] sm:text-5xl">{title}</h2>
      </div>
      {aside && <p className="max-w-sm text-sm leading-relaxed text-mute">{aside}</p>}
    </div>
  )
}
