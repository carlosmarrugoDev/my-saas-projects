'use client'

import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import {
  type Feature,
  type FeatureStatus,
  type Plan,
  type Project,
  type ProjectStatus,
  type Version,
} from '@/lib/projects'
import { slugify } from '@/lib/use-projects'
import { cn } from '@/lib/utils'

const inputCls =
  'w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60'
const labelCls = 'mb-1.5 block text-xs font-medium text-muted-foreground'

const STATUS_OPTIONS: { value: ProjectStatus; label: string }[] = [
  { value: 'construccion', label: 'En construcción' },
  { value: 'progreso', label: 'En desarrollo activo' },
  { value: 'demo', label: 'Demo gratis disponible' },
  { value: 'listo', label: 'Listo para alquilar' },
]

const FEATURE_STATUS_OPTIONS: { value: FeatureStatus; label: string }[] = [
  { value: 'desarrollo', label: 'En desarrollo' },
  { value: 'planificado', label: 'Planificado' },
  { value: 'listo', label: 'Listo' },
]

function emptyProject(): Project {
  return {
    id: '',
    name: '',
    tagline: '',
    category: '',
    status: 'construccion',
    image: '',
    url: '',
    summary: '',
    description: [''],
    priceFrom: '',
    plans: [{ name: '', price: '', period: '/ mes', description: '', features: [''] }],
    features: [{ title: '', description: '', status: 'desarrollo' }],
    versions: [{ version: '', date: '', title: '', changes: [''] }],
    techStack: [],
  }
}

export function ProjectForm({
  initial,
  onSave,
  onCancel,
}: {
  initial?: Project
  onSave: (project: Project) => void
  onCancel: () => void
}) {
  const [draft, setDraft] = useState<Project>(initial ?? emptyProject())
  const [error, setError] = useState<string | null>(null)

  function set<K extends keyof Project>(key: K, value: Project[K]) {
    setDraft((d) => ({ ...d, [key]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!draft.name.trim()) {
      setError('El nombre es obligatorio.')
      return
    }
    const cleaned: Project = {
      ...draft,
      id: initial?.id || slugify(draft.name),
      image: draft.image || '/placeholder.svg',
      description: draft.description.map((p) => p.trim()).filter(Boolean),
      techStack: draft.techStack.map((t) => t.trim()).filter(Boolean),
      features: draft.features.filter((f) => f.title.trim()),
      plans: draft.plans
        .filter((p) => p.name.trim())
        .map((p) => ({ ...p, features: p.features.filter((x) => x.trim()) })),
      versions: draft.versions
        .filter((v) => v.version.trim())
        .map((v) => ({ ...v, changes: v.changes.filter((x) => x.trim()) })),
    }
    if (cleaned.description.length === 0) cleaned.description = [draft.summary]
    onSave(cleaned)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Básicos */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls}>Nombre *</label>
          <input className={inputCls} value={draft.name} onChange={(e) => set('name', e.target.value)} placeholder="Ej: Fluedu" />
        </div>
        <div>
          <label className={labelCls}>Categoría</label>
          <input className={inputCls} value={draft.category} onChange={(e) => set('category', e.target.value)} placeholder="Educación, Restaurantes..." />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls}>Frase corta (tagline)</label>
          <input className={inputCls} value={draft.tagline} onChange={(e) => set('tagline', e.target.value)} placeholder="Gestión educativa en la nube" />
        </div>
        <div>
          <label className={labelCls}>Estado</label>
          <select className={inputCls} value={draft.status} onChange={(e) => set('status', e.target.value as ProjectStatus)}>
            {STATUS_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls}>Precio desde</label>
          <input className={inputCls} value={draft.priceFrom} onChange={(e) => set('priceFrom', e.target.value)} placeholder="$0 COP / mes o Próximamente" />
        </div>
        <div>
          <label className={labelCls}>Imagen (URL o /ruta)</label>
          <input className={inputCls} value={draft.image} onChange={(e) => set('image', e.target.value)} placeholder="/projects/mi-saas.png" />
        </div>
        <div>
          <label className={labelCls}>Enlace del proyecto (opcional)</label>
          <input className={inputCls} value={draft.url ?? ''} onChange={(e) => set('url', e.target.value)} placeholder="https://..." />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls}>Resumen (aparece en la tarjeta)</label>
          <textarea className={cn(inputCls, 'min-h-20 resize-y')} value={draft.summary} onChange={(e) => set('summary', e.target.value)} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls}>Descripción larga (un párrafo por línea)</label>
          <textarea
            className={cn(inputCls, 'min-h-32 resize-y')}
            value={draft.description.join('\n')}
            onChange={(e) => set('description', e.target.value.split('\n'))}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls}>Stack tecnológico (separado por comas)</label>
          <input
            className={inputCls}
            value={draft.techStack.join(', ')}
            onChange={(e) => set('techStack', e.target.value.split(','))}
            placeholder="Next.js, React, PostgreSQL"
          />
        </div>
      </div>

      {/* Funcionalidades */}
      <Section
        title="Funcionalidades"
        onAdd={() => set('features', [...draft.features, { title: '', description: '', status: 'desarrollo' }])}
      >
        {draft.features.map((f, i) => (
          <Row key={i} onRemove={() => set('features', draft.features.filter((_, j) => j !== i))}>
            <div className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
              <input className={inputCls} value={f.title} placeholder="Título" onChange={(e) => updateItem('features', i, { title: e.target.value })} />
              <input className={inputCls} value={f.description} placeholder="Descripción" onChange={(e) => updateItem('features', i, { description: e.target.value })} />
              <select className={inputCls} value={f.status} onChange={(e) => updateItem('features', i, { status: e.target.value as FeatureStatus })}>
                {FEATURE_STATUS_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </Row>
        ))}
      </Section>

      {/* Planes */}
      <Section
        title="Planes / Precios"
        onAdd={() => set('plans', [...draft.plans, { name: '', price: '', period: '/ mes', description: '', features: [''] }])}
      >
        {draft.plans.map((p, i) => (
          <Row key={i} onRemove={() => set('plans', draft.plans.filter((_, j) => j !== i))}>
            <div className="grid gap-3 sm:grid-cols-2">
              <input className={inputCls} value={p.name} placeholder="Nombre del plan" onChange={(e) => updateItem('plans', i, { name: e.target.value })} />
              <input className={inputCls} value={p.badge ?? ''} placeholder="Etiqueta (ej: Popular)" onChange={(e) => updateItem('plans', i, { badge: e.target.value })} />
              <input className={inputCls} value={p.price} placeholder="Precio (ej: $420k COP)" onChange={(e) => updateItem('plans', i, { price: e.target.value })} />
              <input className={inputCls} value={p.period} placeholder="Periodo (ej: / mes)" onChange={(e) => updateItem('plans', i, { period: e.target.value })} />
              <input className={cn(inputCls, 'sm:col-span-2')} value={p.description ?? ''} placeholder="Descripción del plan" onChange={(e) => updateItem('plans', i, { description: e.target.value })} />
              <textarea
                className={cn(inputCls, 'sm:col-span-2 min-h-20 resize-y')}
                value={p.features.join('\n')}
                placeholder="Una característica por línea"
                onChange={(e) => updateItem('plans', i, { features: e.target.value.split('\n') })}
              />
              <label className="flex items-center gap-2 text-xs text-muted-foreground sm:col-span-2">
                <input
                  type="checkbox"
                  checked={!!p.highlighted}
                  onChange={(e) => updateItem('plans', i, { highlighted: e.target.checked })}
                  className="h-4 w-4 accent-[var(--primary)]"
                />
                Destacar este plan
              </label>
            </div>
          </Row>
        ))}
      </Section>

      {/* Versiones */}
      <Section
        title="Versiones / Hoja de ruta"
        onAdd={() => set('versions', [...draft.versions, { version: '', date: '', title: '', changes: [''] }])}
      >
        {draft.versions.map((v, i) => (
          <Row key={i} onRemove={() => set('versions', draft.versions.filter((_, j) => j !== i))}>
            <div className="grid gap-3 sm:grid-cols-3">
              <input className={inputCls} value={v.version} placeholder="Versión (v1.0)" onChange={(e) => updateItem('versions', i, { version: e.target.value })} />
              <input className={inputCls} value={v.date} placeholder="Fecha / estado" onChange={(e) => updateItem('versions', i, { date: e.target.value })} />
              <input className={inputCls} value={v.title} placeholder="Título" onChange={(e) => updateItem('versions', i, { title: e.target.value })} />
              <textarea
                className={cn(inputCls, 'sm:col-span-3 min-h-16 resize-y')}
                value={v.changes.join('\n')}
                placeholder="Un cambio por línea"
                onChange={(e) => updateItem('versions', i, { changes: e.target.value.split('\n') })}
              />
            </div>
          </Row>
        ))}
      </Section>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <div className="flex flex-wrap gap-3 border-t border-border pt-6">
        <button type="submit" className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
          {initial ? 'Guardar cambios' : 'Crear proyecto'}
        </button>
        <button type="button" onClick={onCancel} className="rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground hover:bg-secondary">
          Cancelar
        </button>
      </div>
    </form>
  )

  // typed updater for array-of-objects fields
  function updateItem<
    K extends 'features' | 'plans' | 'versions',
  >(key: K, index: number, patch: Partial<Project[K][number]>) {
    setDraft((d) => {
      const arr = [...(d[key] as unknown[])] as (Feature | Plan | Version)[]
      arr[index] = { ...arr[index], ...patch } as Feature | Plan | Version
      return { ...d, [key]: arr } as Project
    })
  }
}

function Section({
  title,
  onAdd,
  children,
}: {
  title: string
  onAdd: () => void
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-border bg-card/40 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-base font-semibold">{title}</h3>
        <button
          type="button"
          onClick={onAdd}
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground hover:border-primary/50 hover:bg-secondary"
        >
          <Plus className="h-3.5 w-3.5" /> Añadir
        </button>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

function Row({ children, onRemove }: { children: React.ReactNode; onRemove: () => void }) {
  return (
    <div className="relative rounded-xl border border-border bg-background p-4 pr-11">
      {children}
      <button
        type="button"
        onClick={onRemove}
        className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-destructive/15 hover:text-destructive"
        aria-label="Eliminar"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  )
}
