// src/data/itineraries.ts
// SAMPLE itineraries only, to show visitors what a trip could look like.
// These are examples, not confirmed packages. Draft wording: please review.

import type { Itinerary } from '../types/itinerary'

export const itineraries: Itinerary[] = [
  {
    id: 'mara-escape',
    title: 'Maasai Mara escape',
    duration: '3 days',
    summary: 'A short safari for travellers who want to focus on one park.',
    stops: ['Airport pickup in Nairobi', 'Travel to the Maasai Mara', 'Game drives in the reserve', 'Return to Nairobi'],
  },
  {
    id: 'rift-valley-and-mara',
    title: 'Rift Valley and Mara',
    duration: '5 days',
    summary: 'A longer route combining a Rift Valley lake with the Maasai Mara.',
    stops: ['Airport pickup in Nairobi', 'Lake Nakuru National Park', 'Travel to the Maasai Mara', 'Game drives in the reserve', 'Return to Nairobi'],
  },
  {
    id: 'safari-and-beach',
    title: 'Safari and beach',
    duration: '7 days',
    summary: 'Time in the parks followed by time on the coast, with the travel between arranged for you.',
    stops: ['Airport pickup in Nairobi', 'Safari in your chosen park', 'Travel to the Kenyan coast', 'Beach days', 'Airport transfer for departure'],
  },
]