// src/components/WhatsAppButton.tsx
// A button that opens a WhatsApp chat with a message already filled in.
// Use it anywhere on the site, changing the label or message as needed.

import { whatsappLink } from '../utils/contactLinks'
import Button from './Button'

type WhatsAppButtonProps = {
  label?: string
  message?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'outlineLight'
  className?: string
}

function WhatsAppButton({ label = 'WhatsApp Us', message, variant = 'primary', className }: WhatsAppButtonProps) {
  return <Button href={whatsappLink(message)} variant={variant} className={className}>{label}</Button>
}

export default WhatsAppButton