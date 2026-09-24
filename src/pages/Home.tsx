// src/pages/Home.tsx
// The home page. Built section by section during Phase 6.

import FeaturedDestinations from '../components/FeaturedDestinations'
import Hero from '../components/Hero'
import WhyKenya from '../components/WhyKenya'

function Home() {
  return (
    <main id="top">
      <Hero />
      <WhyKenya />
      <FeaturedDestinations />
    </main>
  )
}

export default Home