// src/components/FeaturedDestinations.tsx
// Grid of destination cards, built from src/data/destinations.ts.
// On the home page it shows a few plus a "view all" button; on its own page it shows all.

import Button from './Button'
import Card from './Card'
import Section from './Section'
import { destinations } from '../data/destinations'

type FeaturedDestinationsProps = {
  limit?: number
  viewAllHref?: string
}

function FeaturedDestinations({ limit, viewAllHref }: FeaturedDestinationsProps) {
  const shown = limit ? destinations.slice(0, limit) : destinations

  return (
    <Section id="destinations" title="Featured destinations" intro="A few of the places we can build your trip around. Tell us what you'd like to see and we'll arrange the rest." tone="sand">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((place) => <Card key={place.id} title={place.name} label={place.region}>{place.summary}</Card>)}
      </div>
      {viewAllHref && (
        <div className="mt-10 text-center">
          <Button href={viewAllHref} variant="secondary">View all destinations</Button>
        </div>
      )}
    </Section>
  )
}

export default FeaturedDestinations