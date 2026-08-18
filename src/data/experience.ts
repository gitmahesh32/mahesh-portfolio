export interface Experience {
  company: string
  role: string
  duration: string
  location?: string
  description: string
  responsibilities: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Haystek Technology',
    role: 'Senior PHP / Laravel Developer/ Full stack',
    duration: '2024 – 2025',
    location: 'India',
    description:
      'Working on scalable web applications using Laravel, Javascript and MySQL. Frontend development and database integration',
    responsibilities: [
      'Develop and maintain web applications using Laravel and javascript.',
      'Build and integrate RESTful APIs for frontend and third-party applications.',
      'Develop reusable components and responsive user interfaces.',
      'Design and optimize MySQL queries and database relationships.',
      'Implement authentication, authorization and application business logic.',
      'Debug production issues and improve application performance.',
    ],
    technologies: [
      'PHP',
      'Laravel',
      'JavaScript',
      'MySQL',
      'HTML',
      'CSS',
    ],
  },

  {
    company: 'Ahex Tech',
    role: 'Sr. PHP / Laravel Developer',
    duration: '2022 – 2023',
    location: 'India',
    description:
      'Developed and maintained PHP-based web applications, Frontend development and database implementation.',
    responsibilities: [
      'Develop full functionality using PHP and Laravel.',
      'Integrate frontend applications with backend services.',
      'Develop responsive web interfaces using HTML, CSS and JavaScript.',
      'Work with MySQL databases, queries and relationships.',
      'Fix bugs, improve existing functionality and maintain legacy applications.',
    ],
    technologies: [
      'PHP',
      'Laravel',
      'JavaScript',
      'Vuejs',
      'MySQL',
      'HTML',
      'CSS'
    ],
  },

  {
    company: 'Ewaycorp',
    role: 'Sr PHP Developer',
    duration: 'Oct2021 – Oct2022',
    location: 'India',
    description:
      'working on PHP-based web applications and responsive interfaces.',
    responsibilities: [
      'Develop web application features using Laravel.',
      'Create responsive interfaces using HTML and CSS.',
      'Implement JavaScript-based frontend functionality.',
      'Work with MySQL databases and application queries.',
      'Troubleshoot bugs and provide application maintenance.',
    ],
    technologies: [
      'PHP',
      'JavaScript',
      'MySQL',
      'HTML',
      'CSS',
    ],
  },
   {
    company: 'Mango IT Solution',
    role: 'Sr PHP Developer',
    duration: 'Jan2020 – Oct2021',
    location: 'India',
    description:
      'Working on PHP-based web applications and responsive interfaces.',
    responsibilities: [
      'Develop web application features using Laravel, Javascript,Vuejs and integrate responsive interfaces using HTML and CSS.',
      'Implement JavaScript-based frontend functionality.',
      'Work with MySQL databases and application queries.',
      'Troubleshoot bugs and provide application maintenance.',
    ],
    technologies: [
      'PHP',
      'JavaScript',
      'MySQL',
      'HTML',
      'CSS',
      'Vue'
    ],
  },
  {
    company: 'Siyatech Venture',
    role: 'Sr PHP Developer',
    duration: 'Aug-2017 – Dec-2019',
    location: 'Indore, India',
    description:
      'Started my journey and working on PHP-based web applications and responsive interfaces.',
    responsibilities: [
      'Develop web application features using PHP, Javascript,HTML and CSS.',
      'Implement MVC based website.',
      'Work with MySQL databases and application queries.',
      'Learn some feature and basic of angular',
    ],
    technologies: [
      'PHP',
      'JavaScript',
      'MySQL',
      'HTML',
      'CSS',
      'Bootstrap',
      'Angular'
    ],
  }
]