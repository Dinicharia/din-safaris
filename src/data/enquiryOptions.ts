// src/data/enquiryOptions.ts
// The choices offered in the form's dropdowns, and the empty starting form.

import type { EnquiryForm } from '../types/enquiry'

export const durationOptions = ['Not sure yet', '3 to 4 days', '5 to 7 days', '8 to 10 days', 'More than 10 days']

export const accommodationOptions = ['No preference', 'Budget-friendly', 'Mid-range', 'Luxury']

export const transportOptions = [
  'No preference',
  'Airport transfers only',
  'Transfers and road travel between destinations',
  'Flights between destinations (including charter)',
]

export const emptyEnquiry: EnquiryForm = {
  name: '',
  email: '',
  whatsapp: '',
  country: '',
  travelDates: '',
  travellers: '',
  duration: '',
  destinations: [],
  interests: [],
  accommodation: '',
  transport: '',
  budget: '',
  requirements: '',
  message: '',
}