// src/types/destination.ts
// Describes the shape of one destination. TypeScript uses this to catch mistakes,
// for example a destination that is missing its name.

export type Destination = {
  id: string
  name: string
  region: string
  summary: string
}