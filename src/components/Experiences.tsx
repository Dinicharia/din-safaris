// src/components/Experiences.tsx
// Grid of experience cards, built from src/data/experiences.ts.

import Card from './Card'
import Section from './Section'
import { experiences } from '../data/experiences'

function Experiences() {
  return (
    <Section id="experiences" title="Safari experiences" intro="Every trip is different. These are some of the ways we can shape yours.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((item) => <Card key={item.id} title={item.name}>{item.summary}</Card>)}
      </div>
    </Section>
  )
}

export default Experiences