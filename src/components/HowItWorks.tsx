// src/components/HowItWorks.tsx
// Four-step explanation of how a trip is planned, with icons and a connecting
// line to give the journey a visual thread. Draft wording for review.

import Section from './Section'
import { publicUrl } from '../utils/publicUrl'

const steps = [
  {
    title: 'Tell us your ideas',
    text: 'Share when you want to travel, who is coming and what you would like to experience.',
    icon: (
      <path d="M4 4h16v12H7l-3 3V4Z" />
    ),
  },
  {
    title: 'We shape your trip',
    text: 'We plan a route and arrange the details: transfers, stays, activities and travel between destinations.',
    icon: (
      <>
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="6" r="2" />
        <path d="M8 18h5a4 4 0 0 0 4-4V9" />
      </>
    ),
  },
  {
    title: 'Receive your quote',
    text: 'You get a personalised quote for your trip, and you can ask us to adjust it.',
    icon: (
      <>
        <path d="M6 3h9l4 4v14H6V3Z" />
        <path d="M9 10h6M9 14h6M9 18h3" />
      </>
    ),
  },
  {
    title: 'Confirm and travel',
    text: 'Once you are happy with the plan, we confirm the arrangements with you.',
    icon: <path d="M5 12.5 10 17 19 7" />,
  },
]

function HowItWorks() {
  return (
    <Section id="how-it-works" title="How we plan your trip" intro="From your first message to your final itinerary." tone="forest" image={publicUrl('images/how-it-works.jpg')}>
      <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
        {steps.map((step, index) => (
          <li key={step.title} className="relative transition duration-300 hover:-translate-y-1">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gold text-ink shadow-md">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {step.icon}
              </svg>
              <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-forest-dark text-xs font-bold text-cream ring-2 ring-forest">{index + 1}</span>
            </div>
            <h3 className="mt-4 font-display text-xl font-bold">{step.title}</h3>
            <p className="mt-2 opacity-80">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export default HowItWorks