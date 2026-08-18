<template>
  <section
    id="projects"
    class="bg-slate-50 px-6 py-24"
  >
    <div class="mx-auto max-w-7xl">

      <!-- Heading -->
      <div class="max-w-2xl">
        <p
          class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600"
        >
          Featured Projects
        </p>

        <h2
          class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Things I've built
        </h2>

        <p class="mt-5 text-lg leading-8 text-slate-600">
          A selection of projects showcasing my experience with Laravel,
          Vue.js, JavaScript and MySQL.
        </p>
      </div>

      <!-- Projects Grid -->
      <div
        class="mt-14 grid gap-8 lg:grid-cols-2"
      >
        <article
          v-for="project in featuredProjects"
          :key="project.id"
          class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >

          <!-- Project Image / Placeholder -->
          <div
            class="relative flex h-56 items-center justify-center overflow-hidden bg-slate-900"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-purple-600/30"
            ></div>

            <div class="relative text-center">
              <p class="text-sm font-medium uppercase tracking-widest text-slate-400">
                Project
              </p>

              <h3 class="mt-2 px-6 text-2xl font-bold text-white">
                {{ project.title }}
              </h3>
            </div>
          </div>

          <!-- Content -->
          <div class="p-7">

            <!-- Role -->
            <div class="flex items-center justify-between gap-4">
              <span
                class="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600"
              >
                {{ project.role }}
              </span>
            </div>

            <!-- Description -->
            <p class="mt-5 leading-7 text-slate-600">
              {{ project.shortDescription }}
            </p>

            <!-- Technologies -->
            <div class="mt-6">
              <h4
                class="text-xs font-semibold uppercase tracking-wide text-slate-900"
              >
                Technologies
              </h4>

              <div class="mt-3 flex flex-wrap gap-2">
                <span
                  v-for="technology in project.technologies"
                  :key="technology"
                  class="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  {{ technology }}
                </span>
              </div>
            </div>

            <!-- Features -->
            <div class="mt-6">
              <h4
                class="text-xs font-semibold uppercase tracking-wide text-slate-900"
              >
                Key Features
              </h4>

              <ul class="mt-3 grid gap-2 sm:grid-cols-2">
                <li
                  v-for="feature in project.features"
                  :key="feature"
                  class="flex items-start gap-2 text-sm text-slate-600"
                >
                  <span class="mt-1 text-blue-600">
                    ✓
                  </span>

                  <span>
                    {{ feature }}
                  </span>
                </li>
              </ul>
            </div>

            <!-- Actions -->
            <div class="mt-7 flex flex-wrap gap-3">

              <button
                type="button"
                class="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
                @click="openProject(project)"
              >
                View
              </button>

              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
              >
                GitHub
              </a>

              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
              >
                Live Site
              </a>

            </div>
          </div>

        </article>
      </div>

    </div>

    <!-- Case Study Modal -->
    <div
      v-if="selectedProject"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      @click.self="closeProject"
    >
      <div
        class="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
      >

        <!-- Modal Header -->
        <div
          class="sticky top-0 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-5"
        >
          <div>
            <p class="text-sm font-semibold text-blue-600">
              {{ selectedProject.role }}
            </p>

            <h3 class="mt-1 text-2xl font-bold text-slate-900">
              {{ selectedProject.title }}
            </h3>
          </div>

          <button
            type="button"
            aria-label="Close project details"
            class="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            @click="closeProject"
          >
            ✕
          </button>
        </div>

        <!-- Modal Content -->
        <div class="space-y-8 p-6">

          <!-- Description -->
          <div>
            <h4 class="text-lg font-bold text-slate-900">
              About the project
            </h4>

            <p class="mt-3 leading-7 text-slate-600">
              {{ selectedProject.description }}
            </p>
          </div>

          <!-- Responsibilities -->
          <div>
            <h4 class="text-lg font-bold text-slate-900">
              My contribution
            </h4>

            <ul class="mt-4 space-y-3">
              <li
                v-for="item in selectedProject.responsibilities"
                :key="item"
                class="flex gap-3 leading-7 text-slate-600"
              >
                <span class="text-blue-600">
                  ✓
                </span>

                <span>
                  {{ item }}
                </span>
              </li>
            </ul>
          </div>

          <!-- Results -->
          <div>
            <h4 class="text-lg font-bold text-slate-900">
              Results
            </h4>

            <ul class="mt-4 space-y-3">
              <li
                v-for="result in selectedProject.results"
                :key="result"
                class="flex gap-3 leading-7 text-slate-600"
              >
                <span class="text-green-600">
                  ✓
                </span>

                <span>
                  {{ result }}
                </span>
              </li>
            </ul>
          </div>

          <!-- Technologies -->
          <div>
            <h4 class="text-lg font-bold text-slate-900">
              Technologies
            </h4>

            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="technology in selectedProject.technologies"
                :key="technology"
                class="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600"
              >
                {{ technology }}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import {  projects, type Project,} from '../data/projects'

const selectedProject = ref<Project | null>(null)

const featuredProjects = computed(() => {
  return projects.filter((project) => project.featured)
})

const openProject = (project: Project) => {
  selectedProject.value = project
}

const closeProject = () => {
  selectedProject.value = null
}
</script>