import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { ContactSection } from '@/components/home/contact-section'

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-16">
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
