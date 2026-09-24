// src/pages/About.tsx
// About page. Draft wording, with a placeholder where the real story belongs.
// No company history, team names or claims have been invented.

import Card from '../components/Card'
import PageHeading from '../components/PageHeading'
import PlanCta from '../components/PlanCta'
import Section from '../components/Section'

function About() {
  return (
    <main>
      <PageHeading title="About Din Safaris" intro="A Kenya-based travel business that plans and arranges trips around you." />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Who we are">Din Safaris is a Kenya-based travel business. [ADD YOUR STORY: who started it, why, and what you love about Kenya.]</Card>
          <Card title="What we do">We plan and arrange Kenya trips, including airport transfers, safaris, stays, activities, travel between destinations and charter flights on request.</Card>
          <Card title="Our approach">Every trip starts with a conversation. You tell us what you want, and we shape the itinerary and quote around it.</Card>
        </div>
      </Section>
      <PlanCta />
    </main>
  )
}

export default About