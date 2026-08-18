<template>
  <section
    id="experience"
    class="bg-white px-6 py-24"
  >
    <div class="mx-auto max-w-7xl">

      <!-- Section Heading -->
      <div class="max-w-2xl">
        <p
          class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600"
        >
          Experience
        </p>

        <h2
          class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          My professional journey
        </h2>

        <p class="mt-5 text-lg leading-8 text-slate-600">
          8 years of experience building and maintaining web applications
          across backend, frontend and database technologies.
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative mt-14">

        <!-- Vertical Line -->
        <div
          class="absolute left-3 top-0 hidden h-full w-px bg-slate-200 md:block"
        ></div>

        <div class="space-y-12">

          <article
            v-for="(experience, index) in experiences"
            :key="`${experience.company}-${experience.role}`"
            class="relative md:pl-12"
          >

            <!-- Timeline Dot -->
            <div
              class="absolute left-0 top-1 hidden h-7 w-7 items-center justify-center rounded-full border-4 border-white bg-blue-600 shadow-sm md:flex"
            >
              <span class="h-2 w-2 rounded-full bg-white"></span>
            </div>

            <!-- Experience Card -->
            <div
              class="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
            >

              <!-- Header -->
              <div
                class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
              >
                <div>
                  <p class="text-sm font-semibold text-blue-600">
                    {{ experience.duration }}
                  </p>

                  <h3
                    class="mt-2 text-xl font-bold text-slate-900"
                  >
                    {{ experience.role }}
                  </h3>

                  <p class="mt-1 font-medium text-slate-600">
                    {{ experience.company }}
                  </p>

                  <p
                    v-if="experience.location"
                    class="mt-1 text-sm text-slate-500"
                  >
                    {{ experience.location }}
                  </p>
                </div>
              </div>

              <!-- Description -->
              <p
                class="mt-6 max-w-4xl leading-7 text-slate-600"
              >
                {{ experience.description }}
              </p>

              <!-- Responsibilities -->
              <div class="mt-7">
                <h4
                  class="text-sm font-semibold uppercase tracking-wide text-slate-900"
                >
                  Responsibilities
                </h4>

                <ul class="mt-4 space-y-3">
                  <li
                    v-for="responsibility in experience.responsibilities"
                    :key="responsibility"
                    class="flex gap-3 text-sm leading-6 text-slate-600"
                  >
                    <span
                      class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                    ></span>

                    <span>
                      {{ responsibility }}
                    </span>
                  </li>
                </ul>
              </div>

              <!-- Technologies -->
              <div class="mt-7">
                <h4
                  class="text-sm font-semibold uppercase tracking-wide text-slate-900"
                >
                  Technologies
                </h4>

                <div class="mt-3 flex flex-wrap gap-2">
                  <span
                    v-for="technology in experience.technologies"
                    :key="technology"
                    class="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-600 ring-1 ring-slate-200"
                  >
                    {{ technology }}
                  </span>
                </div>
              </div>

            </div>
          </article>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import {
  experiences,
} from '../data/experience'
</script>