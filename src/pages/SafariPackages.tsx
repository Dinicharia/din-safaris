// src/pages/SafariPackages.tsx
// Sample itineraries page. Reuses the itineraries section from the home page.

import PageHeading from '../components/PageHeading'
import PlanCta from '../components/PlanCta'
import SampleItineraries from '../components/SampleItineraries'

function SafariPackages() {
  return (
    <main>
      <PageHeading title="Sample itineraries" intro="Examples of how a Kenya trip could look. Yours will be planned around you." />
      <SampleItineraries />
      <PlanCta />
    </main>
  )
}

export default SafariPackages