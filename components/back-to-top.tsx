'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={
        'fixed bottom-6 right-6 z-50 inline-flex h-10 w-10 items-center justify-center rounded-md border border-hairline bg-surface/85 text-foreground backdrop-blur-sm transition-all duration-200 hover:border-cobalt hover:text-cobalt ' +
        (visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0')
      }
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  )
}
