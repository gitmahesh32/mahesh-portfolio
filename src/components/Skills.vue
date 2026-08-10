<template>
  <section
    id="skills"
    class="bg-slate-50 px-6 py-24"
  >
    <div class="mx-auto max-w-7xl">

      <!-- Heading -->
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Skills & Expertise
        </p>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Technologies I work with
        </h2>

        <p class="mt-5 text-lg leading-8 text-slate-600">
          My experience covers backend development, frontend development,
          database management and modern web application development.
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        <article
          v-for="skill in skills"
          :key="skill.name"
          class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >

          <!-- Top -->
          <div class="flex items-start justify-between gap-4">

            <div class="flex items-center gap-4">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-xl font-bold text-slate-700 transition group-hover:bg-blue-600 group-hover:text-white"
              >
                {{ skill.icon }}
              </div>

              <div>
                <h3 class="font-semibold text-slate-900">
                  {{ skill.name }}
                </h3>

                <p class="mt-1 text-sm text-slate-500">
                  {{ skill.experience }}
                </p>
              </div>
            </div>

          </div>

          <!-- Description -->
          <p class="mt-5 text-sm leading-6 text-slate-600">
            {{ skill.description }}
          </p>

          <!-- Expertise -->
          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="item in skill.expertise"
              :key="item"
              class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {{ item }}
            </span>
          </div>

        </article>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
interface Skill {
  name: string
  experience: string
  description: string
  icon: string
  expertise: string[]
}

const skills: Skill[] = [
  {
    name: 'PHP',
    experience: '4–5 Years',
    description:
      'Developing applications, business logic and server-side functionality.',
    icon: 'PHP',
    expertise: [
      'OOP',
      'MVC',
      'Web Development',
      'API Development',
    ],
  },
  {
    name: 'Laravel',
    experience: '4–5 Years',
    description:
      'Building scalable web applications and REST APIs using the Laravel framework.',
    icon: 'L',
    expertise: [
      'MVC',
      'Eloquent',
      'Authentication',
      'Migration',
      'Validation',
      'MVC',
      'Artisan',
      'Blade template'
    ],
  },
  {
    name: 'Vue.js',
    experience: '3 Years',
    description:
      'Building interactive, component-based user interfaces and single-page applications.',
    icon: 'V',
    expertise: [
      'Vue 3',
      'Components',
      'Composition API',
      'API Integration',
      'SPA',
      'State Manage'
    ],
  },
  {
    name: 'JavaScript',
    experience: '4–5 Years',
    description:
      'Developing interactive frontend functionality and integrating APIs with modern JavaScript.',
    icon: 'JS',
    expertise: [
      'ES6+',
      'Async/Await',
      'REST APIs',
      'DOM',
      'JSON',
    ],
  },
  {
    name: 'MySQL',
    experience: '4 Years',
    description:
      'Working with relational databases, queries, relationships and application data.',
    icon: 'SQL',
    expertise: [
      'Queries',
      'Joins',
      'Relationships',
      'Indexes',
      'Optimization',
    ],
  },
  {
    name: 'HTML & CSS',
    experience: '7 / 4 Years',
    description:
      'Creating semantic, responsive and accessible web interfaces.',
    icon: '</>',
    expertise: [
      'HTML5',
      'CSS3',
      'Responsive Design',
    ],
  },
]
</script>