import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { IdCard } from '@/components/id-card'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Education } from '@/components/education'
import { Achievements } from '@/components/achievements'
import { Contact } from '@/components/contact'
import { BackToTop } from '@/components/back-to-top'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <About />
      <IdCard />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      <BackToTop />
    </main>
  )
}
