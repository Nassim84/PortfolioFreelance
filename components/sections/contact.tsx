import { Mail, MessageCircle } from 'lucide-react'
import { ContactForm } from '@/components/sections/contact-form'
import { site } from '@/lib/site'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="grid gap-10 rounded-[2rem] bg-[#d7f36b] p-8 sm:p-12 lg:grid-cols-[.9fr_1.1fr] lg:p-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[.2em] text-[#617500]">Un projet en tête ?</p>
          <h2 className="mt-4 max-w-xl text-5xl font-semibold leading-none tracking-[-.06em] sm:text-7xl">
            Faisons quelque chose d&apos;utile.
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-[#4f5d2a]">
            Expliquez-moi votre besoin en quelques lignes. Je vous réponds personnellement avec une première piste et les prochaines étapes.
          </p>

          <div className="mt-7 flex flex-col items-start gap-3 text-sm font-semibold">
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 underline">
              <Mail className="size-4" aria-hidden="true" />
              {site.email}
            </a>
            <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 underline">
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp : {site.phone}
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
