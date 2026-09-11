const ACHIEVEMENTS = [
  {
    tag: 'certification',
    title: 'Certification title',
    issuer: 'Issuing organization',
    year: '20XX',
  },
  {
    tag: 'award',
    title: 'Award or recognition',
    issuer: 'Event / organization',
    year: '20XX',
  },
  {
    tag: 'milestone',
    title: 'Coding milestone',
    issuer: 'Platform (e.g. LeetCode, HackerRank)',
    year: '20XX',
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="border-b border-hairline">
      <div className="mx-auto max-w-[68rem] px-4 py-16 md:py-20">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-cobalt">
            // achievements
          </p>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            Certifications &amp; recognition
          </h2>
          <p className="max-w-xl font-sans text-sm leading-relaxed text-slate">
            These are editable placeholders &mdash; add only your real
            certifications, awards, and milestones here. Delete any row you
            don&apos;t need.
          </p>
        </div>

        <ul className="mt-8 divide-y divide-hairline border-y border-hairline">
          {ACHIEVEMENTS.map((a, i) => (
            <li
              key={i}
              className="flex flex-col gap-2 py-5 md:flex-row md:items-center md:justify-between md:gap-6"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-[20px] shrink-0 items-center rounded-md border border-hairline bg-surface-2 px-2 font-mono text-[10px] uppercase tracking-[0.06em] text-slate">
                  {a.tag}
                </span>
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                    {a.title}
                  </h3>
                  <p className="font-sans text-[13px] text-slate">{a.issuer}</p>
                </div>
              </div>
              <span className="pl-9 font-mono text-[13px] text-cobalt md:pl-0">
                {a.year}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
