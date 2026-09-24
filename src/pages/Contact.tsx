// src/pages/Contact.tsx
// Contact page: every way to reach Din Safaris. No address is shown
// because none has been supplied.

import Button from '../components/Button'
import Card from '../components/Card'
import EmailButton from '../components/EmailButton'
import PageHeading from '../components/PageHeading'
import Section from '../components/Section'
import WhatsAppButton from '../components/WhatsAppButton'
import { contact } from '../data/contact'

function Contact() {
  return (
    <main>
      <PageHeading title="Contact us" intro="Ask a question or start planning your Kenya trip. Choose the way that suits you." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="WhatsApp chat">
            <p className="font-medium text-forest">{contact.whatsappDisplay}</p>
            <p className="mt-2">Send us a message with your questions or trip ideas.</p>
            <WhatsAppButton label="Chat on WhatsApp" className="mt-4" />
          </Card>
          <Card title="WhatsApp call">
            <p className="font-medium text-forest">{contact.whatsappDisplay}</p>
            <p className="mt-2">Prefer to talk? Open our WhatsApp chat and tap the call icon at the top of the screen.</p>
            <WhatsAppButton label="Open WhatsApp" variant="secondary" message="Hello Din Safaris, I would like to talk about planning a Kenya trip." className="mt-4" />
          </Card>
          <Card title="Email">
            <p className="font-medium text-forest">{contact.email}</p>
            <p className="mt-2">Send us the details of your trip and any questions.</p>
            <EmailButton label="Send an email" className="mt-4" />
          </Card>
          <Card title="Plan my trip">
            <p className="mt-2">Fill in our trip form and get a ready-made message to send us, so we have everything we need from the start.</p>
            <Button href="/plan-my-trip" variant="secondary" className="mt-4">Plan My Trip</Button>
          </Card>
        </div>
      </Section>
    </main>
  )
}

export default Contact