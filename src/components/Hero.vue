<template>
  <section
    id="home"
    class="flex min-h-screen items-center bg-slate-50 px-6 pt-24 transition-colors dark:bg-slate-950"
  >
    <div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

      <!-- Content -->
      <div>
        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 px-1 dark:text-slate-400">
          Senior Full-Stack Developer
        </p>

        <h1 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
          Hi, I'm Mahesh.
          <span class="block text-blue-600">
            Laravel & Vue.js Developer.
          </span>
        </h1>

        <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          I have 8 years of professional IT experience building
          modern, scalable and maintainable web applications using
          Laravel, Vue.js, JavaScript and MySQL.
        </p>

        <!-- Buttons -->
        <div class="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            class="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            View My Work
          </a>

          <a
            href="#contact"
            class="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            Contact Me
          </a>
        </div>

        <!-- Technologies -->
        <div class="mt-10 flex flex-wrap gap-3">
          <span
            v-for="technology in technologies"
            :key="technology"
            class="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm ring-1 ring-slate-200"
          >
            {{ technology }}
          </span>
        </div>
      </div>

      <!-- Profile Card -->
      <div class="hidden justify-center lg:flex">
        <div class="relative">
          <div class="absolute -inset-4 rounded-3xl bg-blue-100 blur-2xl"></div>

          <div class="relative w-80 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <img src="/images/photo-mahesh.jpeg" class="flex h-42 w-42  justify-center rounded-full" />
            
            

            <h2 class="mt-6 text-2xl font-bold text-slate-900">
              Laravel Developer
            </h2>

            <p class="mt-2 text-slate-500">
              PHP • Laravel • Vue.js
            </p>

            <div class="mt-6 grid grid-cols-2 gap-4">
              <div class="rounded-xl bg-slate-50 p-4">
                <p class="text-2xl font-bold text-slate-900">8+</p>
                <p class="text-sm text-slate-500">Years Experience</p>
              </div>

              <div class="rounded-xl bg-slate-50 p-4">
                <p class="text-2xl font-bold text-slate-900">3+</p>
                <p class="text-sm text-slate-500">Years Vue.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const technologies = [
  'PHP',
  'Laravel',
  'Vue.js',
  'JavaScript',
  'MySQL',
  'HTML',
  'CSS',
]
</script>