// src/components/Section.tsx
// A full-width page section with a centred content area, optional heading,
// an optional background photo, and a gentle fade-and-rise animation the
// first time it scrolls into view. Respects "reduce motion" preferences.

import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
  title?: string
  intro?: string
  tone?: 'cream' | 'sand' | 'forest'
  id?: string
  image?: string
}

const tones = {
  cream: 'bg-cream text-ink',
  sand: 'bg-sand/40 text-ink',
  forest: 'bg-forest text-cream',
}

function Section({ children, title, intro, tone = 'cream', id, image }: SectionProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.15 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id={id} className={`relative overflow-hidden px-6 py-16 transition-all duration-700 ease-out md:py-24 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} ${tones[tone]}`}>
      {image && (
        <>
          <img src={image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/46 via-forest/46 to-forest-dark/46" />
        </>
      )}
      <div className="relative mx-auto max-w-6xl">
        {title && <h2 className="font-display text-3xl font-bold md:text-4xl">{title}</h2>}
        {intro && <p className="mt-4 max-w-2xl text-lg opacity-80">{intro}</p>}
        <div className={title ? 'mt-10' : ''}>{children}</div>
      </div>
    </section>
  )
}

export default Section