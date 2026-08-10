<template>
  <section
    id="about"
    class="bg-white px-6 py-24"
  >
    <div class="mx-auto max-w-7xl">

      <!-- Section Heading -->
      <div class="max-w-2xl">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          About Me
        </p>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Building reliable web applications with modern technologies.
        </h2>
      </div>

      <!-- Content -->
      <div class="mt-12 grid gap-12 lg:grid-cols-2">

        <!-- About Text -->
        <div class="space-y-6 text-lg leading-8 text-slate-600">
          <p>
            I am a Full-Stack Web Developer with
            <strong class="font-semibold text-slate-900">
              8 years of professional IT experience
            </strong>,
            specializing in PHP, Laravel and Vue.js.
          </p>

          <p>
            Throughout my career, I have worked on building and
            maintaining web applications, developing REST APIs,
            implementing business logic, working with databases,
            and creating responsive user interfaces.
          </p>

          <p>
            My strongest experience is with the
            <strong class="font-semibold text-slate-900">
              Laravel + Vue.js
            </strong>
            stack, where I enjoy working across both backend and
            frontend to build complete, maintainable applications.
          </p>

          <p>
            I focus on writing clean code, solving real business
            problems, improving application performance and building
            user-friendly experiences.
          </p>
        </div>

        <!-- Highlights -->
        <div class="grid gap-5 sm:grid-cols-2">

          <div
            v-for="highlight in highlights"
            :key="highlight.title"
            class="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600"
            >
              {{ highlight.icon }}
            </div>

            <h3 class="mt-5 text-lg font-semibold text-slate-900">
              {{ highlight.title }}
            </h3>

            <p class="mt-2 text-sm leading-6 text-slate-600">
              {{ highlight.description }}
            </p>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
interface Highlight {
  title: string
  description: string
  icon: string
}

const highlights: Highlight[] = [
  {
    title: '8+ Years Experience',
    description:
      'Professional experience developing and maintaining web applications.',
    icon: '💼',
  },
  {
    title: 'Backend Development',
    description:
      'Building APIs, business logic and scalable backend applications with Laravel.',
    icon: '⚙️',
  },
  {
    title: 'Frontend Development',
    description:
      'Creating responsive and interactive interfaces using Vue.js and JavaScript.',
    icon: '💻',
  },
  {
    title: 'Database',
    description:
      'Working with MySQL databases, queries, relationships and application data.',
    icon: '🗄️',
  },
]
</script>