'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Tag } from 'lucide-react'
import type { Project } from '@/lib/projects'
import { EASE } from '@/lib/motion'
import { StatusBadge } from './status-badge'

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: EASE }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40"
    >
      <Link href={`/proyectos/${project.id}`} className="relative block aspect-video overflow-hidden">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={`Vista previa de ${project.name}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <div className="absolute left-3 top-3">
          <StatusBadge status={project.status} />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Tag className="h-3.5 w-3.5 text-primary" />
              {project.category}
            </div>
            <h3 className="mt-1.5 font-display text-xl font-semibold tracking-tight">
              {project.name}
            </h3>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

        <div className="mt-auto flex items-end justify-between gap-3 pt-2">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Desde</p>
            <p className="font-display text-lg font-semibold text-foreground">{project.priceFrom}</p>
          </div>
          <div className="flex items-center gap-2">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                aria-label={`Visitar ${project.name}`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            <Link
              href={`/proyectos/${project.id}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
            >
              Ver detalles
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
