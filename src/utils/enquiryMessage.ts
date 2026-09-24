// src/utils/enquiryMessage.ts
// Turns the completed form into a plain-text message that the visitor
// can send to us by WhatsApp or email. Empty fields are left out.

import type { EnquiryForm } from '../types/enquiry'

export function buildEnquiryMessage(form: EnquiryForm): string {
  const details: [string, string][] = [
    ['Name', form.name],
    ['Email', form.email],
    ['WhatsApp', form.whatsapp],
    ['Country of residence', form.country],
    ['Travel dates', form.travelDates],
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