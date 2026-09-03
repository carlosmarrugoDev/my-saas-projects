'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, Terminal, X } from 'lucide-react'
import { whatsappLink } from '@/lib/site'
import { cn } from '@/lib/utils'

const NAV = [
  { href: '/saas', label: 'SaaS propios' },
  { href: '/webs', label: 'Webs freelance' },
  { href: '/founder', label: 'Founder' },
  { href: '/proceso', label: 'Cómo trabajo' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/admin', label: 'Panel' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/25 transition-transform group-hover:scale-105">
            <Terminal className="h-4 w-4" strokeWidth={2.4} />
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight">
            Carlos<span className="text-primary">Dev</span>SaaS
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Hablemos
          </a>
        </div>

        <button
          type="button"
          className="grid h-9 w-9 place-items-center rounded-lg border border-border text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Hablemos
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
