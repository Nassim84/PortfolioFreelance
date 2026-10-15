'use client'

import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
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
          <a href="#contact" className="rounded-full bg-[#17211c] px-5 py-3 text-[#f7f7f2]">
            Parlons de votre projet <ArrowRight className="ml-2 inline size-4" />
          </a>
        </div>

        <button
          className="rounded-full p-2 md:hidden"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-[#dfe4d8] bg-white p-5 md:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
        </div>
      )}
    </header>
  )
}
