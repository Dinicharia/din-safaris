import PageHeading from '../components/PageHeading'
import PlanCta from '../components/PlanCta'
import SampleItineraries from '../components/SampleItineraries'
import { publicUrl } from '../utils/publicUrl'

function SafariPackages() {
  return (
    <main>
      <PageHeading title="Sample itineraries" intro="Examples of how a Kenya trip could look. Yours will be planned around you." image={publicUrl('images/experiences/photography-safari.jpg')} imagePosition="center 55%" />
      <SampleItineraries />
      <PlanCta />
    </main>
  )
}

export default SafariPackages