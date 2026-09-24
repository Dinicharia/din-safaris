// src/pages/Home.tsx
// The home page: a short overview. Detailed content lives on the inner pages.

import Experiences from '../components/Experiences'
import FeaturedDestinations from '../components/FeaturedDestinations'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import PlanCta from '../components/PlanCta'

function Home() {
  return (
    <main id="top">
      <Hero />
      <FeaturedDestinations limit={3} viewAllHref="/destinations" />
      <HowItWorks />
      <Experiences limit={3} viewAllHref="/experiences" />
      <PlanCta />
    </main>
  )
}

export default Home