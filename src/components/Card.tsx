// src/components/Card.tsx
// A content card with an optional photo, used for destinations, experiences and itineraries.
// Lifts slightly with a deeper shadow on hover.

import type { ReactNode } from 'react'

type CardProps = {
  title: string
  children: ReactNode
  label?: string
  image?: string
  imageAlt?: string
}

const badge = 'inline-block rounded-full bg-sand px-3 py-1 text-xs font-medium text-forest'

function Card({ title, children, label, image, imageAlt = '' }: CardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-sand transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {image && <img src={image} alt={imageAlt} width={400} height={300} loading="lazy" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110" />}
      <div className="p-6">
        {label && <span className={badge}>{label}</span>}
        <h3 className="mt-3 font-display text-xl font-bold text-forest">{title}</h3>
        <div className="mt-2 text-ink/80">{children}</div>
      </div>
    </article>
  )
}

export default Card