// src/utils/contactLinks.ts
// Builds the web addresses that open WhatsApp and the visitor's email app,
// with a message already filled in.

import { contact } from '../data/contact'

const defaultWhatsAppMessage = 'Hello Din Safaris, I would like help planning a Kenya safari.'

// https://wa.me/<number>?text=<message> is WhatsApp's official "click to chat" link.
export function whatsappLink(message: string = defaultWhatsAppMessage): string {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}

// mailto: opens the visitor's email app with the address, subject and body filled in.
export function mailtoLink(subject: string, body: string = ''): string {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}