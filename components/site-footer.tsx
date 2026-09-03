import Link from 'next/link'
import { Code2, Contact, Mail, MessageCircle, Terminal } from 'lucide-react'
import { mailtoLink, site, whatsappLink } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/25">
              <Terminal className="h-4 w-4" strokeWidth={2.4} />
            </span>
            <span className="font-display text-[15px] font-semibold tracking-tight">
              Carlos<span className="text-primary">Dev</span>SaaS
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Diseño y desarrollo productos SaaS y páginas web a medida. Cuéntame tu idea y la
            convertimos en software real.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Navegación</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link href="/saas" className="hover:text-foreground">
                SaaS propios
              </Link>
            </li>
            <li>
              <Link href="/webs" className="hover:text-foreground">
                Webs freelance
              </Link>
            </li>
            <li>
              <Link href="/founder" className="hover:text-foreground">
                Sobre el founder
              </Link>
            </li>
            <li>
              <Link href="/proceso" className="hover:text-foreground">
                Cómo trabajo
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-foreground">
                Contacto
              </Link>
            </li>
            <li>
              <Link href="/admin" className="hover:text-foreground">
                Panel del creador
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Contacto</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={mailtoLink()} className="inline-flex items-center gap-2 hover:text-foreground">
                <Mail className="h-4 w-4" /> {site.email}
              </a>
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
                <Code2 className="h-4 w-4" /> GitHub
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
                <Contact className="h-4 w-4" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} CarlosDevSaaS. Todos los derechos reservados.</p>
          <p>Hecho con Next.js — desplegado en Vercel.</p>
        </div>
      </div>
    </footer>
  )
}
