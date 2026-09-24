// src/components/EmailButton.tsx
// A button that opens the visitor's email app with the subject and message filled in.

import { mailtoLink } from '../utils/contactLinks'
import Button from './Button'

type EmailButtonProps = {
  label?: string
  subject?: string
  body?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'outlineLight'
  className?: string
}

function EmailButton({ label = 'Email Us', subject = 'Kenya trip enquiry', body, variant = 'outline', className }: EmailButtonProps) {
  return <Button href={mailtoLink(subject, body)} variant={variant} className={className}>{label}</Button>
}

export default EmailButton