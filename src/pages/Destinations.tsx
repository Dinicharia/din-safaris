// src/pages/Destinations.tsx
// Destinations page. Reuses the destinations section built for the home page.

import FeaturedDestinations from '../components/FeaturedDestinations'
import PageHeading from '../components/PageHeading'
import PlanCta from '../components/PlanCta'

function Destinations() {
  return (
    <main>
      <PageHeading title="Destinations" intro="Places we can build your Kenya trip around." />
      <FeaturedDestinations />
      <PlanCta />
    </main>
  )
}

export default Destinations