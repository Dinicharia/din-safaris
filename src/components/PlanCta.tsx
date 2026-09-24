// src/components/PlanCta.tsx
// Closing call to action shown at the bottom of most pages.

import { contact } from '../data/contact'
import Button from './Button'
import EmailButton from './EmailButton'
import WhatsAppButton from './WhatsAppButton'

function PlanCta() {
  return (
    <section className="bg-forest px-6 py-16 text-center text-cream md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Ready to plan your Kenya trip?</h2>
        <p className="mt-4 text-lg opacity-90">Tell us what you have in mind and we will prepare a personalised quote. Fill in the trip form, or message us on WhatsApp or by email.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/plan-my-trip">Plan My Trip</Button>
          <WhatsAppButton variant="outlineLight" />
          <EmailButton variant="outlineLight" />
        </div>
        <p className="mt-6 opacity-80">WhatsApp: {contact.whatsappDisplay} · Email: {contact.email}</p>
      </div>
    </section>
  )
}

export default PlanCta