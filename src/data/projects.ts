export interface Project {
  id: number
  title: string
  shortDescription: string
  description: string
  role: string
  technologies: string[]
  features: string[]
  responsibilities: string[]
  results: string[]
  image?: string
  github?: string
  liveUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Oculo Facial Platform',
    shortDescription:
      'Platform for ophthalmologists to manage templates and patient-related content.',
    description:
      'A full-stack website application designed to help doctor and patient. Each doctor have their own templates and features. They can manage the menus and other details thing through the Admin panel',
    role: 'Sr. Developer',
    technologies: [
      'Laravel',
      'Vue.js',
      'MySQL',
      'JavaScript',
      'HTML',
      'CSS',
    ],
    features: [
      'Admin Panel',
      'User roles and permissions',
      'Doctor menu management',
      'Dashboard and reporting',
      'Templates control',
      'Slot booking',
      'Patient information',
      'Other'
    ],
    responsibilities: [
      'Developed full website using Laravel framework',
      'Built reusable components for the frontend.',
      'Implemented authentication and role-based permissions.',
      'Designed database relationships using MySQL and migration',
      'Frontend components with Laravel blade templates.',
      'Debugged issues and improved application performance.',
      'Client interection & daily updates'
    ],
    results: [
      'Centralized project and management.',
      'Reduced load time.',
      'Improved visibility into project progress.',
    ],
    featured: true,
    liveUrl:'https://drmarkbrown.com'
  },

  {
    id: 2,
    title: 'CDS Arizona',
    shortDescription:
      'Healthcare center system with scheduling and admin features. Built interactive admin dashboards with Vue.js, AJAX, and Laravel, focusing on responsive UI, reusable components, and seamless user experience',
    description:
      'Healthcare center system with scheduling and admin features. Built interactive admin dashboards with Vue.js, AJAX, and Laravel, focusing on responsive UI, reusable components, and seamless user experience',
    role: 'Laravel Developer',
    technologies: [
      'Laravel',
      'PHP',
      'MySQL',
      'JavaScript',
      'HTML',
      'CSS',
    ],
    features: [
      'Admin panel',
      'Frontend',
      'Vuejs features with laravel',
      'Datatables and coreui templates',
      'User authentication',
      'Admin dashboard and other',
    ],
    responsibilities: [
      'Developed Laravel modules and business logic.',
      'Study of boiler plate and templates',
      'Implemented MySQL database relationships and migrations.',
      'Developed responsive frontend functionality.',
      
    ],
    results: [
      'Progressive',
      'Reduced repetitive manual processes.',
    ],
    featured: true,
    liveUrl:'https://cds.hireawiz.com'
  },

  {
    id: 3,
    title: 'Franchise Ventures',
    shortDescription:
      'Developed a franchise management platform supporting vendor onboarding, lead tracking, and role-based administration.',
    description:
      'Developed a franchise management platform supporting vendor onboarding, lead tracking, and role-based administration.',
    role: 'Sr developer (PHP + Laravel Full Stack)',
    technologies: [
      'Laravel',
      'Vue.js',
      'JavaScript',
      'MySQL',
      'Tailwind CSS',
    ],
    features: [
      'Dashboard statistics',
      'User management',
      'Role management',
      'Data tables',
      'Search and filters',
      'Responsive interface',
      'CRM'
    ],
    responsibilities: [
      'Admin panel build',
      'Working as a Full stack developer',
      'Module wise task work',
      'Implemented fronted features',
      'Worked on layouts and dynamic features',
    ],
    results: [
      'Give fresh version',
      'Provided fully new website.',
      'Version upgrade and other',
    ],
    featured: true,
    liveUrl:'https://franchiseventures.com'
   
  },
]