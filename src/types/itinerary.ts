// src/types/itinerary.ts
// The shape of one sample itinerary. No price field on purpose:
// prices are given by personalised quote.

export type Itinerary = {
  id: string
  title: string
  duration: string
  summary: string
  stops: string[]
}