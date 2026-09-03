'use client'

import { MessageSquare, PenTool, Rocket, Wrench } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'

const STEPS = [
  {
    icon: MessageSquare,
    title: 'Hablamos de tu idea',
    text: 'Me cuentas qué necesitas por WhatsApp o correo. Definimos alcance, objetivos y presupuesto.',
  },
  {
    icon: PenTool,
    title: 'Diseño la solución',
    text: 'Propongo la arquitectura, el diseño y las funcionalidades clave para tu negocio.',
  },
  {
    icon: Wrench,
    title: 'Desarrollo a medida',
    text: 'Construyo el producto con avances constantes y versiones que puedes ir revisando.',
  },
  {
    icon: Rocket,
    title: 'Lanzo y doy soporte',
    text: 'Publico tu plataforma, la mantengo en marcha y la hago crecer contigo.',
  },
]

export function ProcessSection() {
  return (
    <section id="proceso" className="relative scroll-mt-20 border-y border-border bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="flex flex-col gap-3">
            <h2 className="max-w-2xl text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
              De la idea al SaaS en marcha
            </h2>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <StaggerItem key={step.title}>
              <div className="group relative h-full rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/40">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-2xl font-bold text-border transition-colors group-hover:text-primary/40">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
