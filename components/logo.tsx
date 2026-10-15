import Link from 'next/link'

type LogoProps = {
  variant?: 'light' | 'dark'
}

export function Logo({ variant = 'light' }: LogoProps) {
  const dark = variant === 'dark'

  return (
    <Link href="/" className="flex items-center gap-3 font-mono text-sm font-bold tracking-tight">
      <span className={`flex size-9 items-center justify-center rounded-full ${dark ? 'bg-[#d7f36b] text-[#17211c]' : 'bg-[#17211c] text-[#d7f36b]'}`}>
        NB
      </span>
      <span>
        Nassim Belalia
        <span className={dark ? 'text-white/40' : 'text-[#91a08f]'}>.dev</span>
      </span>
    </Link>
  )
}
