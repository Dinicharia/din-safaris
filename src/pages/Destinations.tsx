// src/pages/Destinations.tsx
// Destinations page: all destinations, then the "Why Kenya?" section.

import FeaturedDestinations from '../components/FeaturedDestinations'
import PageHeading from '../components/PageHeading'
import PlanCta from '../components/PlanCta'
import WhyKenya from '../components/WhyKenya'

function Destinations() {
  return (
    <main>
      <PageHeading title="Destinations" intro="Places we can build your Kenya trip around." />
      <FeaturedDestinations />
      <WhyKenya />
      <PlanCta />
    </main>
  )
}

export default Destinations