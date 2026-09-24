// src/pages/FAQ.tsx
// FAQ page. Uses the built-in <details> element, so it needs no JavaScript
// and works with keyboards and screen readers.

import PageHeading from '../components/PageHeading'
import PlanCta from '../components/PlanCta'
import Section from '../components/Section'
import { faqs } from '../data/faqs'

function FAQ() {
  return (
    <main>
      <PageHeading title="Frequently asked questions" intro="Quick answers about planning your trip. Can't find yours? Just ask us." />
      <Section>
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="rounded-2xl bg-white p-5 ring-1 ring-sand">
              <summary className="cursor-pointer font-display text-lg font-bold text-forest">{item.question}</summary>
              <p className="mt-3 text-ink/80">{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>
      <PlanCta />
    </main>
  )
}

export default FAQ