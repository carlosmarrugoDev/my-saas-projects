'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Check,
  ExternalLink,
  GitBranch,
  Layers,
  Sparkles,
} from 'lucide-react'
import {
  FEATURE_STATUS_META,
  STATUS_META,
} from '@/lib/projects'
import { useProject } from '@/lib/use-projects'
import { EASE } from '@/lib/motion'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { StatusBadge } from '@/components/status-badge'
import { ContactButtons } from '@/components/contact-buttons'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'
import { cn } from '@/lib/utils'

const FEATURE_TOKEN: Record<string, string> = {
  info: 'text-info',
  success: 'text-success',
  muted: 'text-muted-foreground',
}

export function ProjectDetail({ slug }: { slug: string }) {
  const project = useProject(slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 text-center">
          <p className="font-mono text-sm text-primary">404</p>
          <h1 className="mt-3 font-display text-3xl font-bold">Proyecto no encontrado</h1>
          <p className="mt-3 text-muted-foreground">
            Puede que este proyecto haya sido movido o aún no exista.
          </p>
          <Link
            href="/#proyectos"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Ver todos los proyectos
          </Link>
        </div>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-8 md:pt-32">
          <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-primary/12 blur-[110px]"
          />
          <div className="relative mx-auto max-w-6xl px-5">
            <Link
              href="/#proyectos"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> Volver a proyectos
            </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <StatusBadge status={project.status} />
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground">
                    <Layers className="h-3.5 w-3.5 text-primary" /> {project.category}
                  </span>
                </div>
                <h1 className="mt-5 text-balance font-display text-4xl font-bold tracking-tight md:text-5xl">
                  {project.name}
                </h1>
                <p className="mt-3 text-pretty text-lg text-muted-foreground">{project.tagline}</p>
                <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                    >
                      Visitar proyecto <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-muted-foreground">
                      <Sparkles className="h-4 w-4 text-primary" /> Disponible pronto
                    </span>
                  )}
                  <a
                    href="#precios"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50"
                  >
                    Ver precios
                  </a>
                </div>

                <div className="mt-6">
                  <p className="mb-2 text-xs text-muted-foreground">¿Te interesa? Contáctame:</p>
                  <ContactButtons projectName={project.name} size="sm" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                className="glow relative overflow-hidden rounded-2xl border border-border"
              >
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={`Vista previa de ${project.name}`}
                  width={900}
                  height={560}
                  className="h-full w-full object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Descripción */}
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
            <Reveal>
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                  Sobre el proyecto
                </h2>
                <div className="mt-6 space-y-4">
                  {project.description.map((p, i) => (
                    <p key={i} className="leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <aside className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold">Ficha rápida</h3>
                <dl className="mt-4 space-y-4 text-sm">
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-muted-foreground">Estado</dt>
                    <dd className="font-medium">{STATUS_META[project.status].label}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-muted-foreground">Categoría</dt>
                    <dd className="font-medium">{project.category}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-muted-foreground">Modelo</dt>
                    <dd className="font-medium">Servicio en alquiler</dd>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-muted-foreground">Desde</dt>
                    <dd className="font-semibold text-primary">{project.priceFrom}</dd>
                  </div>
                </dl>
                <div className="mt-6 border-t border-border pt-5">
                  <p className="mb-2 text-xs text-muted-foreground">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </section>

        {/* Funcionalidades */}
        <section className="border-y border-border bg-card/30 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                Funcionalidades
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                Todo lo que incluye la plataforma, con el estado de cada módulo.
              </p>
            </Reveal>

            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((f) => {
                const meta = f.status ? FEATURE_STATUS_META[f.status] : null
                return (
                  <StaggerItem key={f.title}>
                    <div className="group h-full rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary/40">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-base font-semibold">{f.title}</h3>
                        {meta && (
                          <span
                            className={cn(
                              'shrink-0 rounded-full border border-border px-2 py-0.5 text-[10px] font-medium',
                              FEATURE_TOKEN[meta.token],
                            )}
                          >
                            {meta.label}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {f.description}
                      </p>
                    </div>
                  </StaggerItem>
                )
              })}
            </Stagger>
          </div>
        </section>

        {/* Precios */}
        <section id="precios" className="scroll-mt-20 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <div className="text-center">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  // Precios
                </span>
                <h2 className="mx-auto mt-3 max-w-2xl text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
                  Planes de {project.name}
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                  Servicio en alquiler. Elige el plan que mejor se adapte y hablamos por WhatsApp
                  para activarlo.
                </p>
              </div>
            </Reveal>

            <Stagger
              className={cn(
                'mt-12 grid gap-5',
                project.plans.length >= 4
                  ? 'sm:grid-cols-2 lg:grid-cols-4'
                  : project.plans.length === 3
                    ? 'sm:grid-cols-2 lg:grid-cols-3'
                    : 'sm:grid-cols-2',
              )}
            >
              {project.plans.map((plan) => (
                <StaggerItem key={plan.name}>
                  <div
                    className={cn(
                      'relative flex h-full flex-col rounded-2xl border p-6 transition-colors',
                      plan.highlighted
                        ? 'border-primary/60 bg-card glow'
                        : 'border-border bg-card hover:border-primary/30',
                    )}
                  >
                    {plan.badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground">
                        {plan.badge}
                      </span>
                    )}
                    <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
                    {plan.description && (
                      <p className="mt-1.5 text-sm text-muted-foreground">{plan.description}</p>
                    )}
                    <div className="mt-5 flex items-baseline gap-1">
                      <span className="font-display text-2xl font-bold">{plan.price}</span>
                      {plan.period && (
                        <span className="text-sm text-muted-foreground">{plan.period}</span>
                      )}
                    </div>
                    <ul className="mt-6 flex-1 space-y-3">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-muted-foreground">{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <ContactButtons projectName={`${project.name} — Plan ${plan.name}`} size="sm" className="mt-6 flex-col [&>a]:w-full" />
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Versiones */}
        <section className="border-t border-border bg-card/30 py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-5">
            <Reveal>
              <div className="flex items-center gap-2">
                <GitBranch className="h-5 w-5 text-primary" />
                <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                  Versiones y hoja de ruta
                </h2>
              </div>
            </Reveal>

            <div className="mt-10 space-y-0">
              {project.versions.map((v, i) => (
                <Reveal key={v.version} delay={i * 0.05}>
                  <div className="relative grid grid-cols-[auto_1fr] gap-5 pb-8 last:pb-0">
                    <div className="flex flex-col items-center">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-primary/40 bg-background font-mono text-xs font-semibold text-primary">
                        {i + 1}
                      </span>
                      {i < project.versions.length - 1 && (
                        <span className="mt-1 w-px flex-1 bg-border" />
                      )}
                    </div>
                    <div className="pb-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-display text-lg font-semibold">{v.version}</span>
                        <span className="rounded-full border border-border bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground">
                          {v.date}
                        </span>
                      </div>
                      <p className="mt-0.5 text-sm font-medium text-primary">{v.title}</p>
                      <ul className="mt-3 space-y-1.5">
                        {v.changes.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA contacto */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-8 text-center md:p-12">
                <h2 className="mx-auto max-w-xl text-balance font-display text-2xl font-bold tracking-tight md:text-3xl">
                  ¿Quieres alquilar {project.name} o una versión a tu medida?
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-pretty leading-relaxed text-muted-foreground">
                  Escríbeme y lo adaptamos a tu negocio. También creo páginas web personalizadas
                  desde cero.
                </p>
                <ContactButtons projectName={project.name} className="mt-7 justify-center" />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
