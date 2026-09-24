// src/pages/Experiences.tsx
// Experiences page. Reuses the experiences section built for the home page.

import Experiences from '../components/Experiences'
import PageHeading from '../components/PageHeading'
import PlanCta from '../components/PlanCta'

function ExperiencesPage() {
  return (
    <main>
      <PageHeading title="Experiences" intro="The kinds of trip we can arrange for you." />
      <Experiences />
      <PlanCta />
    </main>
  )
}

export default ExperiencesPage