// src/components/Header.tsx
// Sticky site header: logo, navigation links, and a mobile menu.

import { useState } from 'react'
import logo from '../assets/logo-mark.svg'
import Button from './Button'
import { navLinks as links } from '../data/navigation'

const linkStyle = 'font-medium text-forest hover:text-earth'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cream/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="" className="h-10 w-10" />
          <span className="font-display text-xl font-bold text-forest">Din Safaris</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {links.map((link) => <a key={link.href} href={link.href} className={linkStyle}>{link.label}</a>)}
          <Button href="#plan">Plan My Trip</Button>
        </nav>

        <button type="button" className="rounded-lg px-3 py-2 font-medium text-forest md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-3 border-t border-sand px-6 py-4 md:hidden" aria-label="Mobile">
          {links.map((link) => <a key={link.href} href={link.href} className={linkStyle} onClick={() => setOpen(false)}>{link.label}</a>)}
          <Button href="#plan" className="text-center">Plan My Trip</Button>
        </nav>
      )}
    </header>
  )
}

export default Header