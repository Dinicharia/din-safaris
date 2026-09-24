// src/components/AppLink.tsx
// One link component for the whole site.
// Addresses starting with "/" are pages, handled by React Router (no full reload).
// Anything else, such as "#contact", is a normal link that jumps within the page.

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
  return <a href={href} className={className} onClick={onClick}>{children}</a>
}

export default AppLink