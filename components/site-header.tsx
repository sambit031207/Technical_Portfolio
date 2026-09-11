'use client'

import { useEffect, useState } from 'react'

const NAV = [
  { label: 'about', href: '#about' },
  { label: 'id', href: '#id-card' },
  { label: 'work', href: '#work' },
  { label: 'education', href: '#education' },
  { label: 'contact', href: '#contact' },
]

const SECTION_IDS = NAV.map((item) => item.href.slice(1))

export function SiteHeader() {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? (doc.scrollTop / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-[68rem] items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-sm bg-ok" aria-hidden="true" />
          <span className="font-display font-semibold tracking-tight text-foreground">
            sambit.patra
          </span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-1 sm:flex">
          {NAV.map((item) => {
            const isActive = active === item.href.slice(1)
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'true' : undefined}
                className={
                  'rounded-md px-3 py-1.5 font-mono text-[13px] transition-colors ' +
                  (isActive ? 'text-cobalt' : 'text-slate hover:text-cobalt')
                }
              >
                {item.label}
              </a>
            )
          })}
        </nav>
      </div>
      {/* scroll progress */}
      <div
        aria-hidden="true"
        className="h-px w-full bg-transparent"
      >
        <div
          className="h-px bg-cobalt transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  )
}
