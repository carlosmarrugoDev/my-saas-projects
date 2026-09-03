import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { ProcessSection } from '@/components/home/process-section'

export default function ProcesoPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-16">
        <ProcessSection />
      </main>
      <SiteFooter />
    </div>
  )
}
