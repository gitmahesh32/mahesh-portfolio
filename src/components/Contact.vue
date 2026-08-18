<template>
  <section
    id="contact"
    class="bg-slate-900 px-6 py-24"
  >
    <div class="mx-auto max-w-7xl">

      <!-- Heading -->
      <div class="mx-auto max-w-2xl text-center">

        <p
          class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400"
        >
          Contact
        </p>

        <h2
          class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Let's work together
        </h2>

        <p
          class="mt-5 text-lg leading-8 text-slate-400"
        >
          Have a project, opportunity or just want to connect?
          Feel free to reach out.
        </p>

      </div>

      <!-- Contact Cards -->
      <div
        class="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-3"
      >

        <a
          v-for="contact in contactLinks"
          :key="contact.label"
          :href="contact.href"
          :target="contact.href.startsWith('http') ? '_blank' : undefined"
          :rel="contact.href.startsWith('http') ? 'noopener noreferrer' : undefined"
          class="group rounded-2xl border border-slate-700 bg-slate-800 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-slate-800/80"
        >

          <!-- Icon -->
          <div
            class="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-700 font-bold text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white"
          >
            {{ contact.icon }}
          </div>

          <!-- Label -->
          <h3
            class="mt-5 font-semibold text-white"
          >
            {{ contact.label }}
          </h3>

          <!-- Value -->
          <p
            class="mt-2 break-all text-sm text-slate-400 transition group-hover:text-blue-400"
          >
            {{ contact.value }}
          </p>

        </a>

      </div>

      <!-- CTA -->
      <div class="mt-12 text-center">

        <a
          href="mailto:maheshrathor007@gmail.com"
          class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Send Me an Email

          <span aria-hidden="true">
            →
          </span>
        </a>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import {
  contactLinks,
} from '../data/contact'
</script>