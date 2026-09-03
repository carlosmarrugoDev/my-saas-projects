import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { FounderSection } from '@/components/home/founder-section'

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-16">
        <FounderSection />
      </main>
      <SiteFooter />
    </div>
  )
}
