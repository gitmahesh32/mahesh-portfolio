<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

      <!-- Logo -->
      <a
        href="#home"
        class="text-xl font-bold tracking-tight text-slate-900"
        @click="closeMenu"
      >
        MR<span class="text-blue-600">.</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden items-center gap-8 md:flex">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-sm font-medium text-slate-600 transition hover:text-blue-600"
        >
          {{ item.name }}
        </a>

        <a
          href="#contact"
          class="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
        >
          Let's Talk
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        type="button"
        class="rounded-lg p-2 text-slate-700 md:hidden"
        aria-label="Toggle navigation"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg
          v-if="!isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>

    <!-- Mobile Navigation -->
    <div
      v-if="isMenuOpen"
      class="border-t border-slate-200 bg-white md:hidden"
    >
      <div class="mx-auto flex max-w-7xl flex-col px-6 py-4">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="border-b border-slate-100 py-3 text-sm font-medium text-slate-700 hover:text-blue-600"
          @click="closeMenu"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </header>
</template>