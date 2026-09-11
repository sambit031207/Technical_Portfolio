import { ArrowUpRight } from 'lucide-react'
import { ContactForm } from './contact-form'

const LINKS = [
  { label: 'email', value: 'patraksambit2@gmail.com', href: 'mailto:patraksambit2@gmail.com' },
  { label: 'github', value: 'github.com/sambit031207', href: 'https://github.com/sambit031207' },
  { label: 'linkedin', value: 'in/k-sambit-patra-33a8a0390', href: 'https://www.linkedin.com/in/k-sambit-patra-33a8a0390/' },
]

export function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-[68rem] px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,0.32fr)_minmax(0,1fr)] md:gap-8">
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-cobalt">
              // contact
            </p>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
              Let&apos;s build something
            </h2>
          </div>

          <div className="flex flex-col">
            <p className="max-w-xl text-pretty font-sans text-[15px] leading-relaxed text-slate">
              I am actively looking for software engineering roles and
              internships where I can learn from strong engineers and ship real
              systems. The fastest way to reach me is email.
            </p>
            <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center justify-between py-3.5 transition-colors"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-slate">
                      {link.label}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[13px] text-foreground transition-colors group-hover:text-cobalt">
                      {link.value}
                      <ArrowUpRight
                        className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <ContactForm />
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-2 border-t border-hairline pt-5 md:flex-row md:items-center">
          <p className="font-mono text-[11px] text-slate">
            © {new Date().getFullYear()} Sambit Patra
          </p>
          <p className="font-mono text-[11px] text-slate">
            built with next.js · deployed on vercel
          </p>
        </div>
      </div>
    </section>
  )
}
