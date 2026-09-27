// src/components/HeroSlideshow.tsx
// A full-width, auto-advancing photo slideshow with clickable progress dots.
// Pure React state and CSS opacity transitions, no external library.

import { useEffect, useState } from 'react'

type HeroSlideshowProps = {
  images: string[]
  intervalMs?: number
}

function HeroSlideshow({ images, intervalMs = 5000 }: HeroSlideshowProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, intervalMs)
    return () => clearInterval(timer)
  }, [images.length, intervalMs])

  return (
    <>
      <div className="absolute inset-0" aria-hidden="true">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchPriority={i === 0 ? 'high' : 'auto'}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-5 flex justify-center gap-2">
        {images.map((src, i) => <button key={src} type="button" aria-label={`Show photo ${i + 1} of ${images.length}`} onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full transition ${i === index ? 'bg-gold' : 'bg-cream/60 hover:bg-cream/90'}`} />)}
      </div>
    </>
  )
}

export default HeroSlideshow