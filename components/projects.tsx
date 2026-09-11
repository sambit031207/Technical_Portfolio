import { ArrowUpRight } from 'lucide-react'

const PROJECTS = [
  {
    id: '01',
    name: 'ledger-core',
    summary:
      'A double-entry ledger service with append-only journals and idempotent transaction posting. Balances are derived from immutable entries; a Postgres advisory-lock strategy keeps concurrent transfers consistent without table-wide locks.',
    stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    repo: '#',
    live: '#',
  },
  {
    id: '02',
    name: 'shard-cache',
    summary:
      'A distributed LRU cache with consistent hashing across nodes and a write-through path to a backing store. Includes a small gossip layer for membership and a benchmark harness comparing hit rates under skewed key distributions.',
    stack: ['Go', 'Redis', 'gRPC'],
    repo: '#',
    live: null,
  },
  {
    id: '03',
    name: 'diff-notes',
    summary:
      'A collaborative markdown editor using CRDTs for conflict-free merges. Operations are batched and persisted to an event log, letting clients reconstruct document state from any point in history.',
    stack: ['TypeScript', 'React', 'WebSocket', 'SQLite'],
    repo: '#',
    live: '#',
  },
]

export function Projects() {
  return (
    <section id="work" className="border-b border-hairline">
      <div className="mx-auto max-w-[68rem] px-4 py-16 md:py-20">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-cobalt">
            // selected work
          </p>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            Projects
          </h2>
          <p className="max-w-xl font-sans text-sm leading-relaxed text-slate">
            The work I&apos;m most proud of &mdash; projects I built to learn by
            doing. Replace these with your own; each note explains what it does
            and what I took away from building it.
          </p>
        </div>

        <div className="mt-8 border-t border-hairline">
          {PROJECTS.map((p) => (
            <article
              key={p.id}
              className="group grid grid-cols-1 gap-4 border-b border-hairline py-8 md:grid-cols-[minmax(0,0.32fr)_minmax(0,1fr)] md:gap-8"
            >
              <div className="flex items-start gap-3">
                <span className="font-mono text-[13px] text-cobalt">
                  [{p.id}]
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                  {p.name}
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                <p className="max-w-2xl text-pretty font-sans text-[15px] leading-relaxed text-slate">
                  {p.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex h-[22px] items-center rounded-md border border-hairline bg-surface-2 px-2 font-mono text-[11px] text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-5 pt-1">
                  <a
                    href={p.repo}
                    className="inline-flex items-center gap-1.5 font-mono text-[13px] text-foreground underline-offset-4 transition-colors hover:text-cobalt hover:underline"
                  >
                    <span className="text-slate" aria-hidden="true">{'>_'}</span>
                    source
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      className="inline-flex items-center gap-1.5 font-mono text-[13px] text-foreground underline-offset-4 transition-colors hover:text-cobalt hover:underline"
                    >
                      live
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
