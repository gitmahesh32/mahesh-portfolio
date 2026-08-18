<template>
  <footer class="border-t border-slate-800 bg-slate-950 px-6 py-10">
    <div
      class="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between"
    >

      <!-- Copyright -->
      <div>
        <a
          href="#home"
          class="text-lg font-bold text-white"
        >
          MR<span class="text-blue-500">.</span>
        </a>

        <p class="mt-2 text-sm text-slate-500">
          © {{ currentYear }} Mahesh. All rights reserved.
        </p>
      </div>

      <!-- Social Links -->
      <div class="flex items-center gap-6">

        <a
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-medium text-slate-400 transition hover:text-blue-400"
        >
          {{ social.name }}
        </a>

        <a
          href="#home"
          class="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-400 transition hover:border-blue-500 hover:text-blue-400"
          aria-label="Back to top"
        >
          ↑
        </a>

      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
 import { socialLinks } from '../data/social';
const currentYear = new Date().getFullYear()
</script>