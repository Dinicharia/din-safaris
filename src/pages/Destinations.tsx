import FeaturedDestinations from '../components/FeaturedDestinations'
import PageHeading from '../components/PageHeading'
import PlanCta from '../components/PlanCta'
import WhyKenya from '../components/WhyKenya'
import { publicUrl } from '../utils/publicUrl'

function Destinations() {
  return (
    <main>
      <PageHeading title="Destinations" intro="Places we can build your Kenya trip around." image={publicUrl('images/destinations/maasai-mara.jpg')} />
      <FeaturedDestinations />
      <WhyKenya />
      <PlanCta />
    </main>
  )
}

export default Destinations