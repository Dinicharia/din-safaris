// src/components/Hero.tsx
// Home page hero: full-width auto-advancing photo slideshow with the main
// message and calls to action on top.

import Button from './Button'
import HeroSlideshow from './HeroSlideshow'
import WhatsAppButton from './WhatsAppButton'
import amboseliImg from '../../public/images/destinations/amboseli.jpg'
import kenyanCoastImg from '../../public/images/destinations/kenyan-coast.jpg'
import lakeNakuruImg from '../../public/images/destinations/lake-nakuru.jpg'
import maasaiMaraImg from '../../public/images/destinations/maasai-mara.jpg'
import heroImg from '../assets/hero.jpg'

const slides = [heroImg, maasaiMaraImg, amboseliImg, lakeNakuruImg, kenyanCoastImg]

function Hero() {
  return (
    <section className="relative flex min-h-[32rem] items-center overflow-hidden bg-forest text-cream md:min-h-[40rem]">
      <HeroSlideshow images={slides} />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/65 via-forest/25 to-forest/10" />
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight md:text-6xl">Discover Kenya. We&apos;ll Arrange the Journey.</h1>
        <p className="mt-6 max-w-xl text-lg opacity-90">From airport pickup and safari camps to charter flights and beach escapes, Din Safaris takes care of every detail of your Kenya trip.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/plan-my-trip">Plan My Trip</Button>
          <WhatsAppButton variant="outlineLight" />
        </div>
      </div>
    </section>
  )
}

export default Hero