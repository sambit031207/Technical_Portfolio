type Level = 'strong' | 'working' | 'learning'

const LEGEND: Record<Level, { label: string; color: string }> = {
  strong: { label: 'proficient', color: 'bg-ok' },
  working: { label: 'working knowledge', color: 'bg-cobalt' },
  learning: { label: 'learning', color: 'bg-slate' },
}

const GROUPS: {
  id: string
  title: string
  items: { name: string; level: Level }[]
}[] = [
  {
    id: 'lang',
    title: 'Languages',
    items: [
      { name: 'TypeScript', level: 'strong' },
      { name: 'Python', level: 'strong' },
      { name: 'Java', level: 'working' },
      { name: 'C++', level: 'working' },
      { name: 'Go', level: 'learning' },
      { name: 'SQL', level: 'strong' },
    ],
  },
  {
    id: 'frame',
    title: 'Frameworks & Runtime',
    items: [
      { name: 'Node.js', level: 'strong' },
      { name: 'React', level: 'strong' },
      { name: 'Next.js', level: 'working' },
      { name: 'Express', level: 'working' },
      { name: 'FastAPI', level: 'working' },
    ],
  },
  {
    id: 'data',
    title: 'Data & Infrastructure',
    items: [
      { name: 'PostgreSQL', level: 'strong' },
      { name: 'Redis', level: 'working' },
      { name: 'Docker', level: 'working' },
      { name: 'Kafka', level: 'learning' },
      { name: 'AWS', level: 'learning' },
    ],
  },
  {
    id: 'tools',
    title: 'Tooling & Practices',
    items: [
      { name: 'Git', level: 'strong' },
      { name: 'Linux', level: 'working' },
      { name: 'CI/CD', level: 'working' },
      { name: 'Vitest', level: 'working' },
      { name: 'gRPC', level: 'learning' },
    ],
  },
]

function Tag({ name, level }: { name: string; level: Level }) {
  return (
    <span className="inline-flex h-[26px] items-center gap-1.5 rounded-md border border-hairline bg-surface-2 px-2.5 font-mono text-[11px] text-foreground">
      <span
        className={`inline-block h-1.5 w-1.5 rounded-sm ${LEGEND[level].color}`}
        aria-hidden="true"
      />
      {name}
    </span>
  )
}

export function Skills() {
  return (
    <section id="stack" className="border-b border-hairline">
      <div className="mx-auto max-w-[68rem] px-4 py-16 md:py-20">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-cobalt">
            // stack
          </p>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            Technical toolkit
          </h2>
          <p className="max-w-xl font-sans text-sm leading-relaxed text-slate">
            The languages, frameworks, and tools I&apos;m building with, grouped
            by domain. The indicators are honest about where I&apos;m confident
            and where I&apos;m still learning.
          </p>
        </div>

        {/* legend */}
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {(Object.keys(LEGEND) as Level[]).map((lvl) => (
            <li key={lvl} className="flex items-center gap-1.5">
              <span
                className={`inline-block h-1.5 w-1.5 rounded-sm ${LEGEND[lvl].color}`}
                aria-hidden="true"
              />
              <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-slate">
                {LEGEND[lvl].label}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 divide-y divide-hairline border-t border-hairline">
          {GROUPS.map((group) => (
            <div
              key={group.id}
              className="grid grid-cols-1 gap-3 py-5 md:grid-cols-[minmax(0,0.32fr)_minmax(0,1fr)] md:gap-6"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[11px] text-slate">
                  {group.id.padEnd(6, ' ')}
                </span>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item.name} name={item.name} level={item.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
