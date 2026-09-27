import Experiences from '../components/Experiences'
import PageHeading from '../components/PageHeading'
import PlanCta from '../components/PlanCta'
import { publicUrl } from '../utils/publicUrl'

function ExperiencesPage() {
  return (
    <main>
      <PageHeading title="Experiences" intro="The kinds of trip we can arrange for you." image={publicUrl('images/experiences/wildlife-safari.jpg')} />
      <Experiences />
      <PlanCta />
    </main>
  )
}

export default ExperiencesPage