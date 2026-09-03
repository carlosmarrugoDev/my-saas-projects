export interface FreelanceProject {
  id: string
  name: string
  client: string
  description: string
  image?: string
  url: string
  category: string
  techStack: string[]
}

export const FREELANCE_PROJECTS: FreelanceProject[] = [
  {
    id: 'observa-tus-derechos',
    name: 'Observa Tus Derechos',
    client: 'Observa Tus Derechos',
    description: 'Página web con recursos y herramientas para conocer y ejercer tus derechos.',
    image: '/projects/freelance-placeholder.svg',
    url: 'https://observatusderechos.com/caja-herramientas/',
    category: 'Información y recursos',
    techStack: ['Diseño web', 'Desarrollo web'],
  },
  {
    id: 'cartas-del-autocuidado',
    name: 'Cartas del Autocuidado',
    client: 'Cartas del Autocuidado',
    description: 'Experiencia web interactiva centrada en el autocuidado y el bienestar personal.',
    image: '/projects/freelance-placeholder.svg',
    url: 'https://cartas-del-autocuidado.vercel.app/',
    category: 'Bienestar',
    techStack: ['Diseño web', 'Desarrollo web'],
  },
]
