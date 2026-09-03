'use client'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/home/hero'
import { useProjects } from '@/lib/use-projects'

export default function Page() {
  const projects = useProjects()

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero count={projects.length} />
      </main>
      <SiteFooter />
    </div>
  )
}
