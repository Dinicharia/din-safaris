// src/pages/Home.tsx
// The home page. Built section by section during Phase 6.

import Experiences from '../components/Experiences'
import FeaturedDestinations from '../components/FeaturedDestinations'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import PlanCta from '../components/PlanCta'
import SampleItineraries from '../components/SampleItineraries'
import WhyKenya from '../components/WhyKenya'
import WhyTravelWithUs from '../components/WhyTravelWithUs'

function Home() {
  return (
    <main id="top">
      <Hero />
      <WhyKenya />
      <FeaturedDestinations />
      <Experiences />
      <HowItWorks />
      <SampleItineraries />
      <WhyTravelWithUs />
      <PlanCta />
    </main>
  )
}

export default Home