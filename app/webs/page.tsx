import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { FreelanceSection } from '@/components/home/freelance-section'

export default function WebsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-16">
        <FreelanceSection />
      </main>
      <SiteFooter />
    </div>
  )
}
