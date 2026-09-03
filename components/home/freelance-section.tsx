'use client'

import { ExternalLink, Globe } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { FREELANCE_PROJECTS } from '@/lib/freelance-projects'

export function FreelanceSection() {
  return (
    <section id="webs" className="relative scroll-mt-20 border-y border-border bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="flex flex-col gap-3">
            <h2 className="max-w-2xl text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
              Sitios web que he creado para clientes
            </h2>
            <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              Una selección de páginas web desarrolladas para negocios y personas. Estos trabajos
              pertenecen a sus respectivos clientes; yo participé en su diseño y desarrollo.
            </p>
          </div>
        </Reveal>

        {FREELANCE_PROJECTS.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {FREELANCE_PROJECTS.map((project) => (
              <article key={project.id} className="overflow-hidden rounded-2xl border border-border bg-background">
                {project.image ? (
                  <img src={project.image} alt={`Vista previa de ${project.name}`} className="aspect-video w-full object-cover" />
                ) : (
                  <div className="grid aspect-video place-items-center bg-secondary text-primary">
                    <Globe className="h-10 w-10" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">{project.category}</p>
                      <h3 className="mt-2 font-display text-xl font-semibold">{project.name}</h3>
                    </div>
                    <span className="text-right text-xs text-muted-foreground">Cliente: {project.client}</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.map((technology) => (
                      <span key={technology} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
                        {technology}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground"
                  >
                    Ver sitio <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-background px-6 py-12 text-center">
            <Globe className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-lg font-semibold">Portafolio web en actualización</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              Aquí aparecerán los sitios que he creado para clientes, con su descripción y enlace.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
