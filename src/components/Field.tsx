// src/components/Field.tsx
// One labelled form field: label, optional hint, the input itself, and an error message.

import type { ReactNode } from 'react'

type FieldProps = {
  id: string
  label: string
  required?: boolean
  hint?: string
  error?: string
  children: ReactNode
}

function Field({ id, label, required, hint, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block font-medium text-forest">{label}{required && <span className="text-earth"> *</span>}</label>
      {hint && <p className="mt-1 text-sm text-ink/70">{hint}</p>}
      <div className="mt-2">{children}</div>
      {error && <p id={`${id}-error`} role="alert" className="mt-1 text-sm font-medium text-red-700">{error}</p>}
    </div>
  )
}

export default Field