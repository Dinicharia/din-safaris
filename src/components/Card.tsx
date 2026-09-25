// src/components/Card.tsx
// A simple content card, used for destinations, experiences and itineraries.

import type { ReactNode } from 'react'

type CardProps = {
  title: string
  children: ReactNode
  label?: string
}

const badge = 'inline-block rounded-full bg-sand px-3 py-1 text-xs font-medium text-forest'

function Card({ title, children, label }: CardProps) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-sand">
      {label && <span className={badge}>{label}</span>}
      <h3 className="mt-3 font-display text-xl font-bold text-forest">{title}</h3>
      <div className="mt-2 text-ink/80">{children}</div>
    </article>
  )
}

export default Card