import { faqs } from '@/lib/content'

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[.2em] text-[#8fa800]">FAQ</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Les questions fréquentes.</h2>
        </div>

        <div className="divide-y divide-[#dfe4d8] border-y border-[#dfe4d8]">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold marker:content-none">
                <span>{question}</span>
                <span className="font-mono text-xl text-[#8fa800] group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-2xl pt-4 text-sm leading-relaxed text-[#61705d]">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
