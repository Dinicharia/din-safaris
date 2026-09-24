// src/components/AppLink.tsx
// One link component for the whole site.
// "/..." addresses are pages, handled by React Router (no full reload).
// "https://..." addresses are other websites (WhatsApp) and open in a new tab.
// Anything else, such as "#contact" or "mailto:...", is a normal link.

import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type AppLinkProps = {
  href: string
  className?: string
  onClick?: () => void
  children: ReactNode
}

function AppLink({ href, className, onClick, children }: AppLinkProps) {
  if (href.startsWith('/')) {
    return <Link to={href} className={className} onClick={onClick}>{children}</Link>
  }
  if (href.startsWith('http')) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>{children}</a>
  }
  return <a href={href} className={className} onClick={onClick}>{children}</a>
}

export default AppLink