// src/types/enquiry.ts
// The shape of the Plan My Trip form. Every field is stored as text (or a list of text)
// because that is what form inputs produce.

export type EnquiryForm = {
  name: string
  email: string
  whatsapp: string
  country: string
  travelDates: string
  travellers: string
  duration: string
  destinations: string[]
  interests: string[]
  accommodation: string
  transport: string
  budget: string
  requirements: string
  message: string
}

// One optional error message per field, e.g. { email: 'Please enter a valid email.' }
export type EnquiryErrors = Partial<Record<keyof EnquiryForm, string>>