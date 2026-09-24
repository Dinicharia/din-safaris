// src/components/Button.tsx
// Reusable link-styled button. Three looks: primary (gold), secondary (green), outline.

import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}

const base = 'inline-block rounded-full px-6 py-3 font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest'

const styles = {
  primary: 'bg-gold text-ink hover:brightness-110',
  secondary: 'bg-forest text-cream hover:bg-forest-dark',
  outline: 'border-2 border-forest text-forest hover:bg-forest hover:text-cream',
}

function Button({ children, href, variant = 'primary', className = '' }: ButtonProps) {
  const classes = `${base} ${styles[variant]} ${className}`
  return <a href={href} className={classes}>{children}</a>
}

export default Button