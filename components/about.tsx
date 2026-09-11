const TRAITS = [
  { word: 'Practical', note: 'I learn by building things that actually run.' },
  { word: 'Curious', note: 'I dig into how systems work under the hood.' },
  { word: 'Growing', note: 'Every project leaves me a better engineer.' },
]

export function About() {
  return (
    <section id="about" className="border-b border-hairline">
      <div className="mx-auto max-w-[68rem] px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,0.32fr)_minmax(0,1fr)] md:gap-8">
          <div className="flex flex-col gap-2">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-cobalt">
              // about
            </p>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
              Who I am
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            <p className="max-w-2xl text-pretty font-sans text-[15px] leading-relaxed text-foreground md:text-base">
              I&apos;m a Computer Science Engineering student who builds software
              projects, learns programming, and uses data to solve practical
              problems. Right now I&apos;m developing my skills across Python,
              Java, web development, and data analysis &mdash; mostly by shipping
              small projects and studying how real systems are put together.
            </p>
            <p className="max-w-2xl text-pretty font-sans text-[15px] leading-relaxed text-slate">
              I&apos;m not here pretending to be a senior engineer. I&apos;m
              building a strong foundation, improving with every commit, and
              looking for the kind of team where I can learn fast and contribute
              real work.
            </p>

            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-3">
              {TRAITS.map((t) => (
                <div key={t.word} className="flex flex-col gap-1.5 bg-background p-4">
                  <dt className="font-display text-base font-semibold text-foreground">
                    {t.word}
                  </dt>
                  <dd className="font-sans text-[13px] leading-relaxed text-slate">
                    {t.note}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
