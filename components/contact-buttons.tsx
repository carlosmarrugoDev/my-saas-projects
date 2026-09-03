'use client'

import { Mail, MessageCircle } from 'lucide-react'
import { mailtoLink, whatsappLink } from '@/lib/site'
import { cn } from '@/lib/utils'

export function ContactButtons({
  projectName,
  className,
  size = 'md',
}: {
  projectName?: string
  className?: string
  size?: 'sm' | 'md'
}) {
  const subject = projectName
    ? `Interés en ${projectName} — CarlosDevSaaS`
    : 'Quiero una web / SaaS a medida — CarlosDevSaaS'
  const waMsg = projectName
    ? `Hola Carlos, me interesa "${projectName}". ¿Podemos hablar?`
    : 'Hola Carlos, quiero una web o SaaS a medida. ¿Podemos hablar?'

  const pad = size === 'sm' ? 'px-3.5 py-2 text-sm' : 'px-5 py-3 text-sm'

  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      <a
        href={whatsappLink(waMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group inline-flex items-center justify-center gap-2 rounded-full bg-success font-medium text-background transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-110',
          pad,
        )}
      >
        <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
        WhatsApp
      </a>
      <a
        href={mailtoLink(subject)}
        className={cn(
          'group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card font-medium text-foreground transition-colors duration-200 hover:border-primary/50 hover:bg-secondary',
          pad,
        )}
      >
        <Mail className="h-4 w-4" strokeWidth={2.2} />
        Escríbeme por correo
      </a>
    </div>
  )
}
