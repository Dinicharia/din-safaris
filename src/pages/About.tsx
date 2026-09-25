// src/pages/About.tsx
// About page. Founding story is built around one confirmed fact: 20 years in business.
// No names, dates or other specifics have been invented.

import Card from '../components/Card'
import PageHeading from '../components/PageHeading'
import PlanCta from '../components/PlanCta'
import Section from '../components/Section'
import WhyTravelWithUs from '../components/WhyTravelWithUs'

function About() {
  return (
    <main>
      <PageHeading title="About Din Safaris" intro="Twenty years of arranging Kenya trips, built on a love of nature, wildlife and the people who guide travellers through it." />
      <Section tone="sand">
        <div className="mx-auto max-w-3xl space-y-4">
          <p>Din Safaris began twenty years ago, out of a simple love for Kenya's wild places, its animals and its landscapes, and a belief that the best way to experience them is through people who know them well.</p>
          <p>Over the years, that has meant working closely with the guides, drivers and camps who spend their lives in Kenya's parks and reserves, and who turn a trip into a real understanding of the country. Their knowledge shapes every itinerary we plan.</p>
          <p>Two decades on, that same approach still guides every trip: listen first, then build a journey around what you want to see and experience.</p>
        </div>
      </Section>
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="What we do">We plan and arrange Kenya trips, including airport transfers, safaris, stays, activities, travel between destinations and charter flights on request.</Card>
          <Card title="Our approach">Every trip starts with a conversation. You tell us what you want, and we shape the itinerary and quote around it.</Card>
          <Card title="Local knowledge">Twenty years working with guides and camps across Kenya means your trip is built on real, local experience.</Card>
        </div>
      </Section>
      <WhyTravelWithUs />
      <PlanCta />
    </main>
  )
}

export default About