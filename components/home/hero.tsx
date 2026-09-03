'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { EASE } from '@/lib/motion'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export function Hero({ count }: { count: number }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,black,transparent)]" />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Estudio independiente de software — {count} productos SaaS propios
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
        >
          Productos digitales que resuelven problemas reales
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Soy Carlos. Creo y opero productos SaaS que puedes poner a disposición de tus clientes,
          y también desarrollo páginas web para negocios que necesitan una presencia digital a su
          medida.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="/saas"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Ver mis SaaS
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="/contacto"
            target="_self"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/50"
          >
            Necesito una web
          </a>
        </motion.div>

        <motion.dl
          variants={item}
          className="mt-14 grid w-full max-w-lg grid-cols-3 gap-4 border-t border-border pt-8"
        >
          {[
            { k: `${count}`, v: 'SaaS propios' },
            { k: '100%', v: 'Código a medida' },
            { k: '24/7', v: 'Soporte directo' },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <dt className="font-display text-2xl font-bold text-foreground md:text-3xl">{s.k}</dt>
              <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  )
}
