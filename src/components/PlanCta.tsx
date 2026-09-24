// src/components/PlanCta.tsx
// Closing call to action with contact placeholders.
// The two buttons are temporary: real WhatsApp and email links come in Phase 9.

import Button from './Button'
import { contact } from '../data/contact'

function PlanCta() {
  return (
    <section id="plan" className="bg-forest px-6 py-16 text-center text-cream md:py-24">
      <div id="contact" className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Ready to plan your Kenya trip?</h2>
        <p className="mt-4 text-lg opacity-90">Tell us what you have in mind and we will prepare a personalised quote. Message us on WhatsApp or send an email.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="#contact">WhatsApp Us</Button>
          <Button href="#contact" variant="outlineLight">Email Us</Button>
        </div>
        <p className="mt-6 opacity-80">WhatsApp: {contact.whatsappNumber} · Email: {contact.email}</p>
      </div>
    </section>
  )
}

export default PlanCta