export type ProjectStatus = 'construccion' | 'progreso' | 'demo' | 'listo'

export type FeatureStatus = 'desarrollo' | 'planificado' | 'listo'

export interface Plan {
  name: string
  price: string
  period: string
  description?: string
  features: string[]
  badge?: string
  highlighted?: boolean
}

export interface Feature {
  title: string
  description: string
  status?: FeatureStatus
}

export interface Version {
  version: string
  date: string
  title: string
  changes: string[]
}

export interface Project {
  id: string
  name: string
  tagline: string
  category: string
  status: ProjectStatus
  image: string
  url?: string
  summary: string
  description: string[]
  priceFrom: string
  plans: Plan[]
  features: Feature[]
  versions: Version[]
  techStack: string[]
  featured?: boolean
}

export const STATUS_META: Record<
  ProjectStatus,
  { label: string; short: string; token: string }
> = {
  construccion: { label: 'En construcción', short: 'Construcción', token: 'warning' },
  progreso: { label: 'En desarrollo activo', short: 'En desarrollo', token: 'info' },
  demo: { label: 'Demo gratis disponible', short: 'Demo gratis', token: 'success' },
  listo: { label: 'Listo para alquilar', short: 'Disponible', token: 'success' },
}

export const FEATURE_STATUS_META: Record<FeatureStatus, { label: string; token: string }> = {
  desarrollo: { label: 'En desarrollo', token: 'info' },
  planificado: { label: 'Planificado', token: 'muted' },
  listo: { label: 'Listo', token: 'success' },
}

export const SEED_PROJECTS: Project[] = [
  {
    id: 'fluedu',
    name: 'Fluedu',
    tagline: 'Gestión educativa simplificada en la nube',
    category: 'Educación',
    status: 'demo',
    image: '/projects/fluedu.png',
    url: 'https://fluedu.com',
    summary:
      'La plataforma que ayuda a colegios a digitalizar toda su operación académica: desde matrículas y calificaciones hasta pagos, asistencia y aulas virtuales.',
    description: [
      'Fluedu es una plataforma integral diseñada para colegios de cualquier tamaño. Digitaliza cada proceso académico y administrativo en un solo sistema, eliminando el papeleo y centralizando la información de estudiantes, docentes y familias.',
      'Desde el proceso de matrícula por año escolar hasta el control de asistencia con códigos QR, Fluedu conecta a rectores, profesores y padres en una experiencia moderna, segura y en tiempo real.',
      'El producto se encuentra listo para una demo gratuita del MVP, con nuevas capacidades incorporándose mes a mes según la hoja de ruta.',
    ],
    priceFrom: '$0 COP / mes',
    plans: [
      {
        name: 'Prueba MVP',
        price: '$0 COP',
        period: '/ mes',
        description: 'Perfecto para conocer la plataforma y darnos feedback.',
        features: [
          'Gestión completa del colegio',
          'Estructura académica base',
          'Asignación de materias y grados',
          'Gestión de estudiantes y padres',
          'Proceso completo de matrículas',
          'Dashboard básico del Rector',
          'Roles: Rector, Profesor, Padre',
        ],
      },
      {
        name: 'Plan Básico',
        price: '$420k COP',
        period: '/ mes',
        description: 'Para colegios que necesitan profesionalizarse hoy.',
        features: [
          'Todo lo del MVP',
          'Hasta 400 estudiantes',
          'Soporte por WhatsApp',
          'Actualizaciones mensuales',
          'Backup automático',
        ],
      },
      {
        name: 'Premium',
        price: '$790k COP',
        period: '/ mes',
        description: 'Funciones avanzadas y control total del campus.',
        badge: 'Popular',
        highlighted: true,
        features: [
          'Todo lo del Básico',
          'Hasta 900 estudiantes',
          'Clases virtuales (Zoom/Meet)',
          'Horarios detallados',
          'Calificaciones y boletines',
          'Asistencia y reportes',
          'Notificaciones ilimitadas',
          'Soporte prioritario',
        ],
      },
      {
        name: 'Enterprise',
        price: '$1.65M COP',
        period: '/ mes',
        description: 'Para redes de colegios y grandes instituciones.',
        features: [
          'Estudiantes ilimitados',
          'Múltiples sedes',
          'Facturación electrónica',
          'API personalizada',
          'Reportes a medida',
          'Gerente dedicado + reuniones',
          'Backup dedicado',
        ],
      },
    ],
    features: [
      {
        title: 'Gestión Académica',
        description:
          'Organiza programas, materias, grados y secciones. Adaptable a colegios de cualquier tamaño y tipo.',
        status: 'desarrollo',
      },
      {
        title: 'Matrículas',
        description:
          'Proceso de matrícula completamente digital por año escolar, con seguimiento en tiempo real.',
        status: 'desarrollo',
      },
      {
        title: 'Pagos en Línea',
        description:
          'Pago de matrículas y mensualidades en línea, con recibos automáticos y estados de cuenta.',
        status: 'planificado',
      },
      {
        title: 'Aulas Virtuales',
        description:
          'Clases en vivo, grabaciones, materiales de estudio y entrega de tareas en un mismo lugar.',
        status: 'planificado',
      },
      {
        title: 'Control de Acceso QR',
        description:
          'Cada estudiante y docente tiene un código QR para registrar entrada y salida de forma segura.',
        status: 'desarrollo',
      },
      {
        title: 'Notificaciones',
        description:
          'Alertas automáticas sobre notas, ausencias, pagos pendientes y comunicados institucionales.',
        status: 'planificado',
      },
      {
        title: 'Documentos y Reportes',
        description:
          'Genera certificados, constancias, boletines y reportes académicos listos para descargar.',
        status: 'desarrollo',
      },
      {
        title: 'Seguimiento de Convivencia',
        description:
          'Registro de incidentes, reconocimientos positivos e historial de comportamiento estudiantil.',
        status: 'desarrollo',
      },
    ],
    versions: [
      {
        version: 'v0.9 MVP',
        date: '2025',
        title: 'Demo gratuita',
        changes: [
          'Gestión completa del colegio y estructura académica',
          'Proceso de matrículas por año escolar',
          'Gestión de estudiantes y padres',
          'Dashboard del Rector y sistema de roles',
        ],
      },
      {
        version: 'v1.0',
        date: 'Próximamente',
        title: 'Profesionalización',
        changes: [
          'Calificaciones, boletines y asistencia',
          'Notificaciones por email y WhatsApp',
          'Backup automático y soporte prioritario',
        ],
      },
      {
        version: 'v1.5',
        date: 'Planificado',
        title: 'Campus completo',
        changes: [
          'Clases virtuales integradas (Zoom/Meet)',
          'Pagos y facturación electrónica en línea',
          'Múltiples sedes y API personalizada',
        ],
      },
    ],
    techStack: ['Next.js', 'React', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    featured: true,
  },
  {
    id: 'valu-restaurant',
    name: 'Valu Restaurant',
    tagline: 'POS digital de autoservicio para restaurantes',
    category: 'Restaurantes',
    status: 'construccion',
    image: '/projects/valu-restaurant.png',
    summary:
      'Sistema de gestión para restaurantes enfocado en autoservicio: el cliente pide desde su celular escaneando un QR y el restaurante gestiona todo el flujo desde un panel.',
    description: [
      'Valu Restaurant es un punto de venta (POS) digital pensado para el autoservicio. El cliente escanea un código QR en su mesa o mostrador, ve el menú con stock actualizado en tiempo real, hace su pedido y paga.',
      'La cocina recibe el pedido, lo prepara y lo marca como listo; el cliente recibe una notificación y reclama su pedido con un código de reclamo. Todo el flujo queda registrado y medido.',
      'Para el restaurante incluye dashboard con métricas de ventas, gestión de mesas, cocina, inventario y recetas, control de caja, turnos y personal, además de reportes de ventas y costos. Es multi-tenant, ideal para operar varios restaurantes.',
      'Actualmente el producto está en construcción; puedes reservar acceso anticipado y participar del desarrollo.',
    ],
    priceFrom: 'Próximamente',
    plans: [
      {
        name: 'Arranque',
        price: 'Próximamente',
        period: '',
        description: 'Para un solo local que empieza con autoservicio.',
        features: [
          'Menú digital con QR',
          'Pedidos y pago simulado',
          'Panel de cocina',
          'Métricas básicas de ventas',
        ],
      },
      {
        name: 'Profesional',
        price: 'Próximamente',
        period: '',
        description: 'Para restaurantes que quieren control total.',
        badge: 'Recomendado',
        highlighted: true,
        features: [
          'Todo lo de Arranque',
          'Gestión de mesas e inventario',
          'Recetas y control de costos',
          'Control de caja, turnos y personal',
          'Reportes de ventas y costos',
        ],
      },
      {
        name: 'Multi-Sede',
        price: 'Próximamente',
        period: '',
        description: 'Para cadenas y operaciones multi-tenant.',
        features: [
          'Todo lo de Profesional',
          'Varios restaurantes / sedes',
          'Reportes consolidados',
          'Soporte prioritario',
        ],
      },
    ],
    features: [
      {
        title: 'Pedido por QR',
        description:
          'El cliente escanea el QR de su mesa, ve el menú con stock en tiempo real y ordena desde su celular.',
        status: 'desarrollo',
      },
      {
        title: 'Panel de Cocina',
        description:
          'La cocina recibe los pedidos, los prepara y los marca como listos con notificación al cliente.',
        status: 'desarrollo',
      },
      {
        title: 'Código de Reclamo',
        description:
          'Cada pedido genera un código único para que el cliente reclame su orden de forma ordenada.',
        status: 'desarrollo',
      },
      {
        title: 'Gestión de Mesas e Inventario',
        description: 'Control de mesas, stock, recetas y costos en un solo lugar.',
        status: 'planificado',
      },
      {
        title: 'Control de Caja y Turnos',
        description: 'Administra caja, turnos y personal con trazabilidad completa.',
        status: 'planificado',
      },
      {
        title: 'Reportes y Métricas',
        description: 'Dashboard con métricas de ventas, costos y desempeño del local.',
        status: 'desarrollo',
      },
    ],
    versions: [
      {
        version: 'v0.1',
        date: 'En construcción',
        title: 'Flujo de autoservicio',
        changes: [
          'Menú digital con QR y stock en tiempo real',
          'Pedido y pago simulado',
          'Panel de cocina con estados de pedido',
        ],
      },
      {
        version: 'v0.5',
        date: 'Planificado',
        title: 'Operación del restaurante',
        changes: [
          'Gestión de mesas, inventario y recetas',
          'Control de caja, turnos y personal',
          'Reportes de ventas y costos',
        ],
      },
      {
        version: 'v1.0',
        date: 'Planificado',
        title: 'Multi-tenant',
        changes: ['Soporte multi-sede', 'Reportes consolidados', 'Planes Arranque / Profesional / Multi-Sede'],
      },
    ],
    techStack: ['Next.js', 'React', 'Tiempo real', 'Tailwind CSS', 'Vercel'],
    featured: true,
  },
]
