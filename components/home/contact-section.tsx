'use client'

import { Reveal } from '@/components/reveal'
import { ContactButtons } from '@/components/contact-buttons'
import { site } from '@/lib/site'

export function ContactSection() {
  return (
    <section id="contacto" className="relative scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <div className="glow relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center md:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,color-mix(in_oklch,var(--primary)_22%,transparent),transparent)]"
            />
            <div className="relative">
              <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
                ¿Quieres poner un SaaS a disposición de tus clientes o necesitas una web?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                Escríbeme directamente. Te respondo por WhatsApp o correo y armamos juntos la
                plataforma que necesitas.
              </p>
              <ContactButtons className="mt-8 justify-center" />
              <p className="mt-6 text-sm text-muted-foreground">
                O escríbeme a{' '}
                <span className="font-medium text-foreground">{site.email}</span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
