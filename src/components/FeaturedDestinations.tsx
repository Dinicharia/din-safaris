// src/components/FeaturedDestinations.tsx
// Grid of destination cards, built from the list in src/data/destinations.ts.

import Card from './Card'
import Section from './Section'
import { destinations } from '../data/destinations'

function FeaturedDestinations() {
  return (
    <Section id="destinations" title="Featured destinations" intro="A few of the places we can build your trip around. Tell us what you'd like to see and we'll arrange the rest." tone="sand">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map((place) => <Card key={place.id} title={place.name} label={place.region}>{place.summary}</Card>)}
      </div>
    </Section>
  )
}

export default FeaturedDestinations