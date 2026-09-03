// Datos de contacto de Carlos. Edita estos valores con tus datos reales.
export const site = {
  name: 'CarlosDevSaaS',
  tagline: 'Estudio de productos SaaS a medida',
  // Cambia estos por tus datos reales:
  email: 'carlos@carlosdevsaas.com',
  // Numero de WhatsApp en formato internacional SIN + ni espacios (Colombia +57)
  whatsapp: '573103724837',
  github: 'https://github.com/carlosdevsaas',
  linkedin: 'https://www.linkedin.com/in/carlosdevsaas',
  youtube: 'https://www.youtube.com/@carlosdevsaas',
  // Enlace a tu CV / resume (PDF, Drive, Notion, etc.)
  resume: 'https://carlosdevsaas.com/cv',
}

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(
    message ?? 'Hola Carlos, vengo desde CarlosDevSaaS y me interesa uno de tus proyectos.',
  )
  return `https://wa.me/${site.whatsapp}?text=${text}`
}

export function mailtoLink(subject?: string, body?: string) {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const qs = params.toString()
  return `mailto:${site.email}${qs ? `?${qs}` : ''}`
}
