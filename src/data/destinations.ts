// src/data/destinations.ts
// Destination content. Draft wording: please review before publishing.
// Deliberately no claims about seasons, prices or sightings until verified.

import type { Destination } from '../types/destination'

export const destinations: Destination[] = [
  { id: 'maasai-mara', name: 'Maasai Mara', region: 'Southwest Kenya', summary: "Open savannah famous for its wildlife and the wildebeest migration, and one of Kenya's best-known safari destinations." },
  { id: 'amboseli', name: 'Amboseli', region: 'Southern Kenya', summary: 'Known for its large elephant herds and views of Mount Kilimanjaro across the border in Tanzania.' },
  { id: 'lake-nakuru', name: 'Lake Nakuru', region: 'Rift Valley', summary: 'A national park around a Rift Valley soda lake, known for its birdlife and rhino conservation.' },
  { id: 'samburu', name: 'Samburu', region: 'Northern Kenya', summary: "A dry northern landscape with wildlife more typical of northern Kenya than of the southern parks." },
  { id: 'nairobi', name: 'Nairobi', region: 'Central Kenya', summary: "Kenya's capital and main gateway, with a national park on the edge of the city." },
  { id: 'kenyan-coast', name: 'Kenyan Coast', region: 'Indian Ocean coast', summary: 'Beaches and coastal towns including Diani, Watamu and Mombasa, popular for relaxing after a safari.' },
]