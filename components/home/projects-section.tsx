'use client'

import { motion } from 'framer-motion'
import { useProjects } from '@/lib/use-projects'
import { ProjectCard } from '@/components/project-card'
import { Reveal } from '@/components/reveal'

export function ProjectsSection() {
  const projects = useProjects()

  return (
    <section id="proyectos" className="relative scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="flex flex-col gap-3">
            <h2 className="max-w-2xl text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
              SaaS creados por CarlosDevSaaS
            </h2>
            <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              Estos son productos que creo, mantengo y pongo a disposición de clientes. Entra a
              cualquiera para conocer sus funcionalidades, versiones y planes.
            </p>
          </div>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
