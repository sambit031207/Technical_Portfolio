const EDUCATION = [
  {
    period: '2025 — 2029',
    degree: 'B.Tech, Computer Science Engineering',
    place: 'GIET University',
    detail:
      'Coursework in data structures & algorithms, operating systems, databases, and computer networks. Learning by building projects alongside the curriculum.',
  },
  {
    period: '20XX — 20XX',
    degree: 'Higher Secondary (Science)',
    place: 'Your School',
    detail:
      'Physics, Chemistry, Mathematics, and Computer Science. Replace with your board, percentage, or notable subjects.',
  },
]

export function Education() {
  return (
    <section id="education" className="border-b border-hairline">
      <div className="mx-auto max-w-[68rem] px-4 py-16 md:py-20">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-cobalt">
            // education
          </p>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            Academic background
          </h2>
          <p className="max-w-xl font-sans text-sm leading-relaxed text-slate">
            My learning journey so far. Swap the placeholder years and
            institutions below for your real details.
          </p>
        </div>

        <ol className="mt-8 border-t border-hairline">
          {EDUCATION.map((e, i) => (
            <li
              key={i}
              className="grid grid-cols-1 gap-3 border-b border-hairline py-6 md:grid-cols-[minmax(0,0.32fr)_minmax(0,1fr)] md:gap-8"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-sm bg-cobalt" aria-hidden="true" />
                <span className="font-mono text-[13px] text-slate">{e.period}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                  {e.degree}
                </h3>
                <p className="font-mono text-[12px] uppercase tracking-[0.06em] text-cobalt">
                  {e.place}
                </p>
                <p className="max-w-2xl text-pretty font-sans text-[14px] leading-relaxed text-slate">
                  {e.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
