import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { ProjectsSection } from '@/components/home/projects-section'

export default function SaasPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-16">
        <ProjectsSection />
      </main>
      <SiteFooter />
    </div>
  )
}
