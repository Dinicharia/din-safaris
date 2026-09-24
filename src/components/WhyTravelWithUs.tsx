// src/components/WhyTravelWithUs.tsx
// Reasons to travel with Din Safaris. Draft wording: every line must be true before launch.

import Card from './Card'
import Section from './Section'

const reasons = [
  { title: 'Based in Kenya', text: 'Din Safaris is a Kenya-based business, so your trip is arranged locally.' },
  { title: 'Everything arranged', text: 'Airport transfers, stays, activities and travel between destinations, including charter flights on request.' },
  { title: 'Planned around you', text: 'Your trip is built from your interests, dates and budget, not picked from a fixed list.' },
  { title: 'Easy to reach', text: 'Message or call us on WhatsApp, or send an email, and ask your questions before you decide.' },
]

function WhyTravelWithUs() {
  return (
    <Section id="why-us" title="Why travel with Din Safaris?" intro="What you can expect when you plan with us.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason) => <Card key={reason.title} title={reason.title}>{reason.text}</Card>)}
      </div>
    </Section>
  )
}

export default WhyTravelWithUs