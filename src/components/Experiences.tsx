// src/components/Experiences.tsx
// Grid of experience cards, built from src/data/experiences.ts.
// Each experience's photo is found automatically from its id.

import Button from './Button'
import Card from './Card'
import Section from './Section'
import { experiences } from '../data/experiences'
import { publicUrl } from '../utils/publicUrl'

type ExperiencesProps = {
  limit?: number
  viewAllHref?: string
}

function Experiences({ limit, viewAllHref }: ExperiencesProps) {
  const shown = limit ? experiences.slice(0, limit) : experiences

  return (
    <Section id="experiences" title="Safari experiences" intro="Every trip is different. These are some of the ways we can shape yours.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((item) => (
          <Card key={item.id} title={item.name} image={publicUrl(`images/experiences/${item.id}.jpg`)} imageAlt={item.name}>
            {item.summary}
          </Card>
        ))}
      </div>
      {viewAllHref && (
        <div className="mt-10 text-center">
          <Button href={viewAllHref} variant="secondary">View all experiences</Button>
        </div>
      )}
    </Section>
  )
}

export default Experiences