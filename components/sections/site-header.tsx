'use client'

import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { ThemeToggle } from '@/components/theme-toggle'
import { navLinks } from '@/lib/site'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const sectionLinks = navLinks.filter((link) => link.href !== '#contact')

  return (
    <header className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
      <nav className="flex items-center justify-between" aria-label="Navigation principale">
        <Logo />

        <div className="hidden items-center gap-7 text-sm font-medium md:flex">
          {sectionLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
          <ThemeToggle />
          <a href="#contact" className="rounded-full bg-ink px-5 py-3 text-paper">
            Parlons de votre projet <ArrowRight className="ml-2 inline size-4" />
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="rounded-full p-2"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-line bg-surface p-5 md:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
        </div>
      )}
    </header>
  )
}
