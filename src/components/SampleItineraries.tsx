// src/components/SampleItineraries.tsx
// Sample itineraries, clearly labelled as examples, each with a photo and a quote-request button.

import Button from './Button'
import Card from './Card'
import Section from './Section'
import { itineraries } from '../data/itineraries'
import { publicUrl } from '../utils/publicUrl'

const itineraryImages: Record<string, string> = {
  'mara-escape': 'images/destinations/maasai-mara.jpg',
  'rift-valley-and-mara': 'images/destinations/lake-nakuru.jpg',
  'safari-and-beach': 'images/destinations/kenyan-coast.jpg',
}

function SampleItineraries() {
  return (
    <Section id="itineraries" title="Sample itineraries" intro="Examples of how a trip could look. Every trip is tailored to you, so tell us what you have in mind and we will prepare a personalised quote." tone="sand">
      <div className="grid gap-6 md:grid-cols-3">
        {itineraries.map((trip) => (
          <Card key={trip.id} title={trip.title} label={`Sample itinerary · ${trip.duration}`} image={publicUrl(itineraryImages[trip.id])} imageAlt={trip.title}>
            <p>{trip.summary}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5">
              {trip.stops.map((stop) => <li key={stop}>{stop}</li>)}
            </ul>
            <Button href="/plan-my-trip" variant="secondary" className="mt-6">Request a quote</Button>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default SampleItineraries