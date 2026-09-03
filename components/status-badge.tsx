import { STATUS_META, type ProjectStatus } from '@/lib/projects'
import { cn } from '@/lib/utils'

const TOKEN_STYLES: Record<string, string> = {
  warning: 'bg-warning/12 text-warning border-warning/25',
  info: 'bg-info/12 text-info border-info/25',
  success: 'bg-success/12 text-success border-success/25',
  muted: 'bg-muted text-muted-foreground border-border',
}

export function StatusBadge({
  status,
  className,
  dot = true,
}: {
  status: ProjectStatus
  className?: string
  dot?: boolean
}) {
  const meta = STATUS_META[status]
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium',
        TOKEN_STYLES[meta.token],
        className,
      )}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      )}
      {meta.label}
    </span>
  )
}
