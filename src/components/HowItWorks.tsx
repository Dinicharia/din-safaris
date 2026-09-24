// src/components/HowItWorks.tsx
// Four-step explanation of how a trip is planned. Draft wording for review.

import Section from './Section'

const steps = [
  { title: 'Tell us your ideas', text: 'Share when you want to travel, who is coming and what you would like to experience.' },
  { title: 'We shape your trip', text: 'We plan a route and arrange the details: transfers, stays, activities and travel between destinations.' },
  { title: 'Receive your quote', text: 'You get a personalised quote for your trip, and you can ask us to adjust it.' },
  { title: 'Confirm and travel', text: 'Once you are happy with the plan, we confirm the arrangements with you.' },
]

function HowItWorks() {
  return (
    <Section id="how-it-works" title="How we plan your trip" intro="From your first message to your final itinerary." tone="forest">
      <ol className="grid gap-8 md:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title}>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold font-bold text-ink">{index + 1}</span>
            <h3 className="mt-4 font-display text-xl font-bold">{step.title}</h3>
            <p className="mt-2 opacity-80">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export default HowItWorks