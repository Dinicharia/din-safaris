// src/components/Section.tsx
// A full-width page section with a centred content area and optional heading.

import type { ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
  title?: string
  intro?: string
  tone?: 'cream' | 'sand' | 'forest'
  id?: string
}

const tones = {
  cream: 'bg-cream text-ink',
  sand: 'bg-sand/40 text-ink',
  forest: 'bg-forest text-cream',
}

function Section({ children, title, intro, tone = 'cream', id }: SectionProps) {
  return (
    <section id={id} className={`px-6 py-16 md:py-24 ${tones[tone]}`}>
      <div className="mx-auto max-w-6xl">
        {title && <h2 className="font-display text-3xl font-bold md:text-4xl">{title}</h2>}
        {intro && <p className="mt-4 max-w-2xl text-lg opacity-80">{intro}</p>}
        <div className={title ? 'mt-10' : ''}>{children}</div>
      </div>
    </section>
  )
}

export default Section