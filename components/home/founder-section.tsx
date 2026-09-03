'use client'

import { Code2, Contact, FileText, Mail, Play, UserRound } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { ContactButtons } from '@/components/contact-buttons'
import { mailtoLink, site } from '@/lib/site'

const LINKS = [
  { label: 'GitHub', href: site.github, icon: Code2 },
  { label: 'LinkedIn', href: site.linkedin, icon: Contact },
  { label: 'YouTube', href: site.youtube, icon: Play },
  { label: 'Resume / CV', href: site.resume, icon: FileText },
]

export function FounderSection() {
  return (
    <section id="founder" className="relative scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <div className="grid gap-10 rounded-3xl border border-border bg-card p-8 md:grid-cols-[0.8fr_1.2fr] md:p-12">
            <div>
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/25">
                <UserRound className="h-7 w-7" />
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">Carlos</h2>
              <p className="mt-2 text-muted-foreground">Founder y desarrollador de CarlosDevSaaS</p>
            </div>

            <div>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Creo productos digitales desde cero, los convierto en herramientas útiles para
                negocios y colaboro con clientes que necesitan una web clara, rápida y hecha a su
                medida.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-secondary"
                  >
                    <link.icon className="h-4 w-4 text-primary" />
                    {link.label}
                  </a>
                ))}
                <a
                  href={mailtoLink()}
                  className="inline-flex items-center gap-3 rounded-xl border border-border px-4 py-3 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-secondary"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  {site.email}
                </a>
              </div>
              <ContactButtons className="mt-7" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
