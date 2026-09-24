// src/pages/Home.tsx
// Temporary page to test the design system. Real home page comes in Phase 6.

import logo from '../assets/logo-mark.svg'
import Button from '../components/Button'
import Card from '../components/Card'
import Section from '../components/Section'

function Home() {
  return (
    <main>
      <Section tone="forest">
        <div className="flex flex-col items-center gap-6 text-center">
          <img src={logo} alt="Din Safaris logo" className="h-24 w-24" />
          <h1 className="font-display text-5xl font-bold">Din Safaris</h1>
          <p className="max-w-md opacity-80">Website under construction.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="#">Plan My Trip</Button>
            <Button href="#" variant="outline" className="border-cream text-cream hover:bg-cream hover:text-forest">WhatsApp Us</Button>
          </div>
        </div>
      </Section>

      <Section title="Design system test" intro="Placeholder cards to check the components." tone="sand">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Sample card one" label="Example">Placeholder text for a destination.</Card>
          <Card title="Sample card two" label="Example">Placeholder text for an experience.</Card>
          <Card title="Sample card three" label="Example">Placeholder text for an itinerary.</Card>
        </div>
      </Section>
    </main>
  )
}

export default Home