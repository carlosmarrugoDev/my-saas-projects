'use client'

import { useSyncExternalStore } from 'react'
import { SEED_PROJECTS, type Project } from './projects'

const STORAGE_KEY = 'carlosdevsaas.projects.v1'

// --- external store ---------------------------------------------------------

let listeners: Array<() => void> = []
let cache: Project[] | null = null

function read(): Project[] {
  if (typeof window === 'undefined') return SEED_PROJECTS
  if (cache) return cache
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      cache = SEED_PROJECTS
      return cache
    }
    const parsed = JSON.parse(raw) as Project[]
    cache = Array.isArray(parsed) && parsed.length > 0 ? parsed : SEED_PROJECTS
    return cache
  } catch {
    cache = SEED_PROJECTS
    return cache
  }
}

function write(next: Project[]) {
  cache = next
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch {
    /* ignore quota errors */
  }
  listeners.forEach((l) => l())
}

function subscribe(cb: () => void) {
  listeners.push(cb)
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      cache = null
      cb()
    }
  }
  window.addEventListener('storage', onStorage)
  return () => {
    listeners = listeners.filter((l) => l !== cb)
    window.removeEventListener('storage', onStorage)
  }
}

// --- helpers ----------------------------------------------------------------

export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function saveProject(project: Project) {
  const list = read()
  const idx = list.findIndex((p) => p.id === project.id)
  const next = [...list]
  if (idx >= 0) next[idx] = project
  else next.unshift(project)
  write(next)
}

export function deleteProject(id: string) {
  write(read().filter((p) => p.id !== id))
}

export function resetProjects() {
  cache = SEED_PROJECTS
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    /* ignore */
  }
  listeners.forEach((l) => l())
}

// --- hooks ------------------------------------------------------------------

export function useProjects(): Project[] {
  return useSyncExternalStore(subscribe, read, () => SEED_PROJECTS)
}

export function useProject(id: string): Project | undefined {
  const projects = useProjects()
  return projects.find((p) => p.id === id)
}
