// src/utils/validateEnquiry.ts
// Checks the form and returns an error message for each problem.
// An empty result means the form is valid.
// Note: this only helps visitors. The future backend must validate again.

import type { EnquiryErrors, EnquiryForm } from '../types/enquiry'

// A deliberately simple email check: something@something.something
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Digits, spaces, dashes and an optional leading +, 7 to 20 characters
const phonePattern = /^\+?[0-9\s-]{7,20}$/

export function validateEnquiry(form: EnquiryForm): EnquiryErrors {
  const errors: EnquiryErrors = {}

  if (!form.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!form.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!emailPattern.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address, for example name@example.com.'
  }

  if (form.whatsapp.trim() && !phonePattern.test(form.whatsapp.trim())) {
    errors.whatsapp = 'Please enter a phone number with the country code, using digits only (spaces and a + are fine).'
  }

  if (!form.country.trim()) {
    errors.country = 'Please tell us which country you live in.'
  }

  const travellers = Number(form.travellers)
  if (!form.travellers.trim()) {
    errors.travellers = 'Please tell us how many people are travelling.'
  } else if (!Number.isInteger(travellers) || travellers < 1 || travellers > 50) {
    errors.travellers = 'Please enter a whole number between 1 and 50.'
  }

  return errors
}