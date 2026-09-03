import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CarlosDevSaaS — Estudio de SaaS a medida',
  description:
    'Portafolio de productos SaaS creados por Carlos. Explora proyectos como Fluedu y Valu Restaurant, revisa precios, versiones y solicita tu plataforma a medida.',
  generator: 'v0.app',
  keywords: [
    'SaaS',
    'desarrollo de software',
    'Fluedu',
    'Valu Restaurant',
    'aplicaciones web a medida',
    'CarlosDevSaaS',
  ],
  openGraph: {
    title: 'CarlosDevSaaS — Estudio de SaaS a medida',
    description:
      'Explora los productos SaaS creados por Carlos: precios, versiones, estado y contacto directo.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#111417',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
