'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

const DETAILS = [
  ['id', 'CSE-2024-0xSP'],
  ['role', 'software engineering student'],
  ['status', 'open to internships'],
  ['location', 'india'],
]

export function IdCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -8, y: px * 8 })
  }

  function reset() {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <section id="id-card" className="border-b border-hairline">
      <div className="mx-auto max-w-[68rem] px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,0.32fr)_minmax(0,1fr)] md:gap-8">
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-cobalt">
              // credentials
            </p>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
              Developer ID
            </h2>
            <p className="mt-1 max-w-xs font-sans text-[13px] leading-relaxed text-slate">
              A quick snapshot of who&apos;s behind the code. Hover to tilt.
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <div
              ref={cardRef}
              onMouseMove={handleMove}
              onMouseLeave={reset}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
              className="w-full max-w-sm overflow-hidden rounded-xl border border-hairline bg-surface shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)] transition-transform duration-150 ease-out"
            >
              {/* card header */}
              <div className="flex items-center justify-between border-b border-hairline bg-background px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-sm bg-ok" aria-hidden="true" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate">
                    dev credential
                  </span>
                </div>
                <span className="font-mono text-[11px] text-slate">v.01</span>
              </div>

              {/* card body */}
              <div className="flex gap-5 p-5">
                <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-md border border-hairline bg-background">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-10 opacity-[0.25] [background-image:linear-gradient(to_right,var(--hairline)_1px,transparent_1px),linear-gradient(to_bottom,var(--hairline)_1px,transparent_1px)] [background-size:12px_12px]"
                  />
                  <Image
                    src="/images/sambit-patra.jpeg"
                    alt="Sambit Patra"
                    fill
                    sizes="96px"
                    className="object-cover object-top"
                    priority
                  />
                </div>

                <div className="flex min-w-0 flex-col justify-center gap-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-cobalt">
                    name
                  </p>
                  <p className="font-display text-lg font-semibold leading-tight tracking-tight text-foreground">
                    Sambit Patra
                  </p>
                  <p className="mt-1 truncate font-mono text-[12px] text-slate">
                    patraksambit2@gmail.com
                  </p>
                </div>
              </div>

              {/* card details */}
              <dl className="grid grid-cols-2 gap-px border-t border-hairline bg-hairline">
                {DETAILS.map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-0.5 bg-surface px-5 py-3">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-slate">
                      {k}
                    </dt>
                    <dd className="font-mono text-[12px] leading-snug text-foreground">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* barcode strip */}
              <div className="border-t border-hairline bg-background px-5 py-3">
                <div
                  aria-hidden="true"
                  className="h-7 w-full opacity-80 [background-image:repeating-linear-gradient(90deg,var(--foreground)_0,var(--foreground)_1px,transparent_1px,transparent_3px),repeating-linear-gradient(90deg,var(--foreground)_0,var(--foreground)_2px,transparent_2px,transparent_7px)]"
                />
                <p className="mt-2 text-center font-mono text-[10px] tracking-[0.3em] text-slate">
                  SAMBIT · PATRA · CSE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
