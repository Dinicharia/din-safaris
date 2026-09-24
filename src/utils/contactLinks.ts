// src/utils/contactLinks.ts
// Builds the web addresses that open WhatsApp and the visitor's email app,
// with a message already filled in.

import { contact } from '../data/contact'

const defaultWhatsAppMessage = 'Hello Din Safaris, I would like help planning a Kenya safari.'

// WhatsApp's "click to chat" link needs the number as digits only.
// Removing everything else means a typo such as "+254 714 606531" cannot break the link.
const whatsappDigits = contact.whatsappNumber.replace(/\D/g, '')

// https://wa.me/<number>?text=<message>
export function whatsappLink(message: string = defaultWhatsAppMessage): string {
  return `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}`
}

// mailto: opens the visitor's email app with the address, subject and body filled in.
export function mailtoLink(subject: string, body: string = ''): string {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}