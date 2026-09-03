'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowLeft, Pencil, Plus, RotateCcw, Trash2 } from 'lucide-react'
import type { Project } from '@/lib/projects'
import {
  deleteProject,
  resetProjects,
  saveProject,
  useProjects,
} from '@/lib/use-projects'
import { SiteHeader } from '@/components/site-header'
import { StatusBadge } from '@/components/status-badge'
import { ProjectForm } from '@/components/admin/project-form'

type Mode = { type: 'list' } | { type: 'new' } | { type: 'edit'; project: Project }

export default function AdminPage() {
  const projects = useProjects()
  const [mode, setMode] = useState<Mode>({ type: 'list' })

  function handleSave(project: Project) {
    saveProject(project)
    setMode({ type: 'list' })
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 pb-24 pt-28 md:pt-32">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Volver al inicio
        </Link>

        <div className="mt-6 flex flex-col gap-4 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              // Panel del creador
            </span>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Gestiona tus SaaS
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Añade, edita o elimina tus proyectos. Los cambios se guardan en este navegador y se
              reflejan al instante en tu portafolio.
            </p>
          </div>
          {mode.type === 'list' && (
            <button
              onClick={() => setMode({ type: 'new' })}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Plus className="h-4 w-4" /> Nuevo proyecto
            </button>
          )}
        </div>

        {mode.type === 'list' && (
          <>
            <div className="mt-8 space-y-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-3 pr-4 transition-colors hover:border-primary/30"
                >
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border border-border">
                    <Image
                      src={project.image || '/placeholder.svg'}
                      alt={project.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display font-semibold">{project.name}</h3>
                      <StatusBadge status={project.status} dot={false} />
                    </div>
                    <p className="mt-0.5 truncate text-sm text-muted-foreground">
                      {project.tagline || project.summary}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <Link
                      href={`/proyectos/${project.id}`}
                      className="hidden rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground sm:inline-flex"
                    >
                      Ver
                    </Link>
                    <button
                      onClick={() => setMode({ type: 'edit', project })}
                      className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                      aria-label={`Editar ${project.name}`}
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`¿Eliminar "${project.name}"?`)) deleteProject(project.id)
                      }}
                      className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-destructive/50 hover:text-destructive"
                      aria-label={`Eliminar ${project.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}

              {projects.length === 0 && (
                <div className="rounded-2xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
                  Aún no hay proyectos. Crea el primero con el botón “Nuevo proyecto”.
                </div>
              )}
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
              <p className="text-xs text-muted-foreground">
                Los datos viven en tu navegador (localStorage).
              </p>
              <button
                onClick={() => {
                  if (confirm('¿Restaurar los proyectos de ejemplo? Se perderán tus cambios.'))
                    resetProjects()
                }}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                <RotateCcw className="h-3.5 w-3.5" /> Restaurar ejemplos
              </button>
            </div>
          </>
        )}

        {mode.type !== 'list' && (
          <div className="mt-8">
            <h2 className="mb-6 font-display text-xl font-semibold">
              {mode.type === 'edit' ? `Editar: ${mode.project.name}` : 'Nuevo proyecto'}
            </h2>
            <ProjectForm
              initial={mode.type === 'edit' ? mode.project : undefined}
              onSave={handleSave}
              onCancel={() => setMode({ type: 'list' })}
            />
          </div>
        )}
      </main>
    </div>
  )
}
