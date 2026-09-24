// src/components/WhyKenya.tsx
// "Why Kenya?" section: three short reasons. Draft wording for review.

import Card from './Card'
import Section from './Section'

const reasons = [
  { title: 'Wildlife', text: 'National parks and reserves across the country offer the chance to see elephants, lions, giraffes and many other species in the wild.' },
  { title: 'Varied landscapes', text: 'From open savannah and Rift Valley lakes to mountain views and Indian Ocean beaches, one country offers very different scenery.' },
  { title: 'Safari and beach together', text: 'Many trips combine time in the parks with time on the coast, and we can arrange the travel between them.' },
]

function WhyKenya() {
  return (
    <Section id="why-kenya" title="Why Kenya?" intro="One country, many kinds of trip.">
      <div className="grid gap-6 md:grid-cols-3">
        {reasons.map((reason) => <Card key={reason.title} title={reason.title}>{reason.text}</Card>)}
      </div>
    </Section>
  )
}

export default WhyKenya