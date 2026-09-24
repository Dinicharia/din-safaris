// src/components/EnquiryConfirmation.tsx
// Shown after the form is submitted. Nothing has been sent or saved (there is no
// backend yet), so this says so plainly and hands the visitor a ready-to-send message.

import { useState } from 'react'
import { contact } from '../data/contact'
import Section from './Section'

type EnquiryConfirmationProps = {
  message: string
  onEdit: () => void
}

const primaryButton = 'rounded-full bg-gold px-6 py-3 font-medium text-ink hover:brightness-110'
const outlineButton = 'rounded-full border-2 border-forest px-6 py-3 font-medium text-forest hover:bg-forest hover:text-cream'

function EnquiryConfirmation({ message, onEdit }: EnquiryConfirmationProps) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle')

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message)
      setStatus('copied')
    } catch {
      setStatus('failed')
    }
  }

  return (
    <Section>
      <div className="mx-auto max-w-3xl space-y-6">
        <p className="text-lg">Thank you for your enquiry. Please contact us on WhatsApp or email to continue planning your trip.</p>
        <p>This website does not send or save your details, so your enquiry only reaches us when you send the message below.</p>

        <div>
          <label htmlFor="enquiry-message" className="block font-medium text-forest">Your message</label>
          <textarea id="enquiry-message" readOnly value={message} rows={12} className="mt-2 w-full rounded-lg border border-sand bg-white p-4 text-sm" />
        </div>

        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={copyMessage} className={primaryButton}>Copy message</button>
          <button type="button" onClick={onEdit} className={outlineButton}>Edit my details</button>
        </div>
        <p aria-live="polite" className="text-sm">
          {status === 'copied' && 'Copied. Paste it into WhatsApp or an email to us.'}
          {status === 'failed' && 'Could not copy automatically. Please select the text above and copy it yourself.'}
        </p>

        <p>WhatsApp: {contact.whatsappNumber} · Email: {contact.email}</p>
        <p className="text-sm text-ink/70">Buttons that open WhatsApp or your email app with this message already filled in are added in the next phase, once real contact details are available.</p>
      </div>
    </Section>
  )
}

export default EnquiryConfirmation