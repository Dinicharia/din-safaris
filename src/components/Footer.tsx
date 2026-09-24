// src/components/Footer.tsx
// Site footer: brand, links and contact details.

import logo from '../assets/logo-mark.svg'
import { contact } from '../data/contact'
import { navLinks } from '../data/navigation'
import { mailtoLink, whatsappLink } from '../utils/contactLinks'
import AppLink from './AppLink'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest-dark px-6 py-12 text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="h-10 w-10" />
            <span className="font-display text-xl font-bold">Din Safaris</span>
          </div>
          <p className="mt-3 opacity-80">Kenya trip planning and travel arrangements.</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-lg font-bold">Explore</h2>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => <li key={link.href}><AppLink href={link.href} className="opacity-80 hover:opacity-100">{link.label}</AppLink></li>)}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-lg font-bold">Contact</h2>
          <ul className="mt-3 space-y-2">
            <li className="opacity-80">WhatsApp: <AppLink href={whatsappLink()} className="underline hover:opacity-100">{contact.whatsappDisplay}</AppLink></li>
            <li className="opacity-80">Email: <AppLink href={mailtoLink('Kenya trip enquiry')} className="underline hover:opacity-100">{contact.email}</AppLink></li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl border-t border-cream/20 pt-6 text-sm opacity-70">© {year} Din Safaris. All rights reserved.</p>
    </footer>
  )
}

export default Footer