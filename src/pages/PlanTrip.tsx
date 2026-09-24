// src/pages/PlanTrip.tsx
// The Plan My Trip enquiry page. Validates the form, then shows a confirmation
// with a ready-to-send message. Nothing is stored or transmitted (no backend yet).

import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import CheckboxGroup from '../components/CheckboxGroup'
import EnquiryConfirmation from '../components/EnquiryConfirmation'
import Field from '../components/Field'
import PageHeading from '../components/PageHeading'
import Section from '../components/Section'
import { destinations } from '../data/destinations'
import { accommodationOptions, durationOptions, emptyEnquiry, transportOptions } from '../data/enquiryOptions'
import { experiences } from '../data/experiences'
import type { EnquiryErrors, EnquiryForm } from '../types/enquiry'
import { buildEnquiryMessage } from '../utils/enquiryMessage'
import { validateEnquiry } from '../utils/validateEnquiry'

type TextKey = Exclude<keyof EnquiryForm, 'destinations' | 'interests'>
type ListKey = 'destinations' | 'interests'

const inputBase = 'w-full rounded-lg border bg-white px-4 py-3 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest'

function PlanTrip() {
  const [form, setForm] = useState<EnquiryForm>(emptyEnquiry)
  const [errors, setErrors] = useState<EnquiryErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function setText(key: TextKey, value: string) {
    setForm({ ...form, [key]: value })
  }

  function toggle(key: ListKey, value: string) {
    const current = form[key]
    const next = current.includes(value) ? current.filter((item) => item !== value) : [...current, value]
    setForm({ ...form, [key]: next })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const found = validateEnquiry(form)
    setErrors(found)
    if (Object.keys(found).length === 0) {
      setSubmitted(true)
      window.scrollTo(0, 0)
    }
  }

  // Everything an input needs: id, value, change handler, error styling and accessibility hints.
  function bind(key: TextKey) {
    return {
      id: key,
      name: key,
      value: form[key],
      onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setText(key, event.target.value),
      'aria-invalid': errors[key] ? true : undefined,
      'aria-describedby': errors[key] ? `${key}-error` : undefined,
      className: `${inputBase} ${errors[key] ? 'border-red-600' : 'border-sand'}`,
    }
  }

  if (submitted) {
    return (
      <main>
        <PageHeading title="Thank you" intro="Your trip details are ready. One more step to reach us." />
        <EnquiryConfirmation message={buildEnquiryMessage(form)} onEdit={() => setSubmitted(false)} />
      </main>
    )
  }

  return (
    <main>
      <PageHeading title="Plan my trip" intro="Tell us about the trip you have in mind. It takes a few minutes, and we will prepare a personalised quote." />
      <Section>
        <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-3xl space-y-6">
          <p className="rounded-lg bg-sand/50 p-4 text-sm">This form does not send your details automatically. After you submit, you will get a ready-made message to send us on WhatsApp or by email. Fields marked * are required.</p>

          {Object.keys(errors).length > 0 && <p role="alert" className="rounded-lg bg-red-50 p-4 font-medium text-red-700">Please check the fields marked below.</p>}

          <Field id="name" label="Your name" required error={errors.name}>
            <input type="text" autoComplete="name" {...bind('name')} />
          </Field>

          <Field id="email" label="Email address" required error={errors.email}>
            <input type="email" autoComplete="email" {...bind('email')} />
          </Field>

          <Field id="whatsapp" label="WhatsApp number" hint="Optional. Include the country code, starting with +." error={errors.whatsapp}>
            <input type="tel" autoComplete="tel" {...bind('whatsapp')} />
          </Field>

          <Field id="country" label="Country of residence" required error={errors.country}>
            <input type="text" autoComplete="country-name" {...bind('country')} />
          </Field>

          <Field id="travelDates" label="Travel dates" hint="Exact dates, or a rough period such as a month and year.">
            <input type="text" {...bind('travelDates')} />
          </Field>

          <Field id="travellers" label="Number of travellers" required error={errors.travellers}>
            <input type="text" inputMode="numeric" {...bind('travellers')} />
          </Field>

          <Field id="duration" label="Trip length">
            <select {...bind('duration')}>
              <option value="">Please select</option>
              {durationOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </Field>

          <CheckboxGroup legend="Destinations you are interested in" options={destinations.map((place) => place.name)} selected={form.destinations} onToggle={(value) => toggle('destinations', value)} />

          <CheckboxGroup legend="Experiences you are interested in" options={experiences.map((item) => item.name)} selected={form.interests} onToggle={(value) => toggle('interests', value)} />

          <Field id="accommodation" label="Accommodation preference">
            <select {...bind('accommodation')}>
              <option value="">Please select</option>
              {accommodationOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </Field>

          <Field id="transport" label="Transport preference">
            <select {...bind('transport')}>
              <option value="">Please select</option>
              {transportOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </Field>

          <Field id="budget" label="Approximate budget" hint="Optional. In any currency. Leave blank if you are not sure yet.">
            <input type="text" {...bind('budget')} />
          </Field>

          <Field id="requirements" label="Special requirements" hint="For example dietary needs, accessibility needs, or the ages of children travelling.">
            <textarea rows={3} {...bind('requirements')} />
          </Field>

          <Field id="message" label="Anything else you would like us to know?">
            <textarea rows={4} {...bind('message')} />
          </Field>

          <button type="submit" className="w-full rounded-full bg-gold px-8 py-4 font-medium text-ink hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest sm:w-auto">Create my enquiry</button>
        </form>
      </Section>
    </main>
  )
}

export default PlanTrip