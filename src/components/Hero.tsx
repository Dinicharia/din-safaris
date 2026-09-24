// src/components/Hero.tsx
// Top-of-page hero: main message and the two primary calls to action.

import Button from './Button'
import WhatsAppButton from './WhatsAppButton'

function Hero() {
  return (
    <section className="bg-forest text-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-gold">Kenya trip planning</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">Discover Kenya. We&apos;ll Arrange the Journey.</h1>
          <p className="mt-6 max-w-xl text-lg opacity-90">From airport pickup and safari camps to charter flights and beach escapes, Din Safaris takes care of every detail of your Kenya trip.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/plan-my-trip">Plan My Trip</Button>
            <WhatsAppButton variant="outlineLight" />
          </div>
        </div>
        <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border-2 border-dashed border-sand/50 bg-forest-dark p-6 text-center text-sm text-sand/70">
          Hero photo placeholder. Replace with a licensed Kenya image.
        </div>
      </div>
    </section>
  )
}

export default Hero