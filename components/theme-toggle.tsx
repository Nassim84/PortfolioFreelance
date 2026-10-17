'use client'

import { Moon, Sun } from 'lucide-react'

// Bascule la classe .dark sur <html> et mémorise le choix.
// Le thème initial est appliqué avant l'affichage par le script de app/layout.tsx.
export function ThemeToggle() {
  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark')
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Changer de thème (clair / sombre)"
      title="Changer de thème"
      className="flex size-10 items-center justify-center rounded-full border border-line-strong transition-colors hover:border-brand-line hover:text-brand"
    >
      <Moon className="size-4 dark:hidden" aria-hidden="true" />
      <Sun className="hidden size-4 dark:block" aria-hidden="true" />
    </button>
  )
}
