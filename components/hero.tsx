'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const META = [
  ['role', 'cse student'],
  ['focus', 'building & learning'],
  ['status', 'open to internships'],
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-hairline">
      {/* blueprint grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,var(--hairline)_1px,transparent_1px),linear-gradient(to_bottom,var(--hairline)_1px,transparent_1px)] [background-size:32px_32px]"
      />

      <div className="relative mx-auto grid max-w-[68rem] grid-cols-1 items-center gap-10 px-4 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        {/* left: copy */}
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-cobalt">
            // sambit patra &mdash; cse student
          </p>
          <h1 className="mt-4 text-pretty font-display text-[26px] font-bold leading-[1.15] tracking-tight text-foreground md:text-[40px]">
            I&apos;m a CSE student learning to build software the right way &mdash; by building.
          </h1>
          <p className="mt-5 max-w-xl text-pretty font-sans text-[15px] leading-relaxed text-slate md:text-base">
            Practical, curious, and growing. I build projects with Python, Java,
            web technologies, and data analysis to turn what I learn into things
            that actually run. I&apos;m looking for software engineering
            internships where I can learn from strong engineers and contribute
            real work.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex h-9 items-center gap-2 rounded-md bg-foreground px-4 font-sans text-sm font-medium text-background transition-colors hover:bg-cobalt hover:text-primary-foreground"
            >
              View work
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-9 items-center gap-2 rounded-md border border-hairline bg-background px-4 font-sans text-sm font-medium text-foreground transition-colors hover:border-cobalt hover:text-cobalt"
            >
              Get in touch
            </a>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-hairline pt-5">
            {META.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-0.5">
                <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-slate">
                  {k}
                </dt>
                <dd className="font-mono text-[13px] text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* right: portrait plate */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-hairline bg-surface">
            {/* blueprint grid inside the plate */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:linear-gradient(to_right,var(--hairline)_1px,transparent_1px),linear-gradient(to_bottom,var(--hairline)_1px,transparent_1px)] [background-size:24px_24px]"
            />
            {/* corner ticks */}
            <span aria-hidden="true" className="absolute left-3 top-3 h-3 w-3 border-l border-t border-cobalt" />
            <span aria-hidden="true" className="absolute right-3 top-3 h-3 w-3 border-r border-t border-cobalt" />
            <span aria-hidden="true" className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-cobalt" />
            <span aria-hidden="true" className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-cobalt" />

            <Image
              src="/images/sambit-patra.jpeg"
              alt="Sambit Patra"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-cover object-top"
            />

            {/* caption strip */}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-hairline bg-surface/85 px-4 py-2 backdrop-blur-sm">
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-foreground">
                sambit patra
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-cobalt">
                cse
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
