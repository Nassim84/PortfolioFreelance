'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { Send } from 'lucide-react'
import { budgets, projectTypes } from '@/lib/content'
import { site } from '@/lib/site'

const fieldClass = 'mt-2 w-full rounded-xl border border-line-strong bg-surface px-4 py-3 font-normal text-ink outline-none focus:ring-2 focus:ring-brand'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formError, setFormError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      setFormError('Merci de compléter les champs obligatoires.')
      form.reportValidity()
      return
    }
    setFormError('')
    setSubmitted(true)
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-paper p-6 text-ink sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Nom
          <input name="name" required className={fieldClass} />
        </label>
        <label className="text-sm font-semibold">
          Email
          <input name="email" type="email" required className={fieldClass} />
        </label>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Type de projet
          <select name="project" required defaultValue="" className={fieldClass}>
            <option value="" disabled>Choisir une option</option>
            {projectTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
        </label>
        <label className="text-sm font-semibold">
          Budget <span className="font-normal text-subtle">(optionnel)</span>
          <select name="budget" defaultValue="" className={fieldClass}>
            <option value="">Choisir une fourchette</option>
            {budgets.map((budget) => <option key={budget}>{budget}</option>)}
          </select>
        </label>
      </div>

      <label className="mt-5 block text-sm font-semibold">
        Message
        <textarea name="message" required rows={5} className={`${fieldClass} resize-none`} />
      </label>

      {formError && <p className="mt-4 text-sm text-red-700" role="alert">{formError}</p>}
      {submitted && (
        <p className="mt-4 text-sm font-semibold text-brand" role="status">
          Merci, votre message est prêt. Écrivez-moi directement à {site.email} ou sur WhatsApp au {site.phone} pour finaliser l&apos;envoi.
        </p>
      )}

      <button type="submit" className="mt-6 inline-flex items-center rounded-full bg-ink px-6 py-4 text-sm font-semibold text-paper">
        <Send className="mr-2 size-4" />
        Envoyer
      </button>

      <p className="mt-4 text-xs leading-relaxed text-subtle">
        Vos informations servent uniquement à répondre à votre demande. Pour en savoir plus et exercer vos droits, consultez la{' '}
        <Link href="/politique-de-confidentialite" className="underline underline-offset-2">politique de confidentialité</Link>.
      </p>
    </form>
  )
}
