// src/components/Header.tsx
// Sticky site header: logo, navigation links, and a mobile menu.

import { useState } from 'react'
import logo from '../assets/logo-mark.svg'
import { navLinks } from '../data/navigation'
import AppLink from './AppLink'
import Button from './Button'

const linkStyle = 'font-medium text-forest hover:text-earth'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cream/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <AppLink href="/" className="flex items-center gap-2">
          <img src={logo} alt="" className="h-10 w-10" />
          <span className="font-display text-xl font-bold text-forest">Din Safaris</span>
        </AppLink>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {navLinks.map((link) => <AppLink key={link.href} href={link.href} className={linkStyle}>{link.label}</AppLink>)}
          <Button href="/plan-my-trip">Plan My Trip</Button>
        </nav>

        <button type="button" className="rounded-lg p-2 text-forest lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <path d="M6 6 L18 18 M18 6 L6 18" />
            ) : (
              <path d="M4 6 H20 M4 12 H20 M4 18 H20" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-3 border-t border-sand px-6 py-4 lg:hidden" aria-label="Mobile">
          {navLinks.map((link) => <AppLink key={link.href} href={link.href} className={linkStyle} onClick={() => setOpen(false)}>{link.label}</AppLink>)}
          <Button href="/plan-my-trip" className="text-center">Plan My Trip</Button>
        </nav>
      )}
    </header>
  )
}

export default Header