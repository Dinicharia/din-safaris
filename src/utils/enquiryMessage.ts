// src/utils/enquiryMessage.ts
// Turns the completed form into a plain-text message that the visitor
// can send to us by WhatsApp or email. Empty fields are left out.

import type { EnquiryForm } from '../types/enquiry'

// Turns "2027-03-15" into "15 March 2027", which reads naturally in a message
// and avoids any day/month ambiguity.
function formatDate(isoDate: string): string {
  if (!isoDate) return ''
  const date = new Date(`${isoDate}T00:00:00`)
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function buildEnquiryMessage(form: EnquiryForm): string {
  const dateLine = form.datesKnown
    ? [formatDate(form.startDate), formatDate(form.endDate)].filter(Boolean).join(' to ')
    : form.travelDates

  const details: [string, string][] = [
    ['Name', form.name],
    ['Email', form.email],
    ['WhatsApp', form.whatsapp],
    ['Country of residence', form.country],
    ['Travel dates', dateLine],
    ['Number of travellers', form.travellers],
    ['Trip length', form.duration],
    ['Destinations of interest', form.destinations.join(', ')],
    ['Experiences of interest', form.interests.join(', ')],
    ['Accommodation', form.accommodation],
    ['Transport', form.transport],
    ['Approximate budget', form.budget],
    ['Special requirements', form.requirements],
    ['Message', form.message],
  ]

  const lines = details
    .filter(([, value]) => value.trim() !== '')
    .map(([label, value]) => `${label}: ${value.trim()}`)

  return ['Hello Din Safaris, I would like help planning a Kenya trip.', '', ...lines].join('\n')
}