<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from '../composables/useTheme'

const isMenuOpen = ref(false)
const { theme, applyTheme } = useTheme()

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
const toggleTheme = () => {
  applyTheme(theme.value === 'dark' ? 'light' : 'dark')
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
      <div class="hidden items-center gap-6 md:flex">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-sm font-medium text-slate-600 transition hover:text-blue-600"
        >
          {{ item.name }}
        </a>
        <!-- Theme Toggle -->
         <button type="button" class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400" :aria-label="theme === 'dark'?'Switch to light mode' : 'Switch to dark mode'" @click="toggleTheme">
          <span v-if="theme === 'dark'">☀️</span>
          <span v-else>🌙</span>
         </button>
        <a
          href="#contact"
          class="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
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
    <div class="mt-4 flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-700">

  <span class="text-sm font-medium text-slate-600 dark:text-slate-300">
    Theme
  </span>

  <button
    type="button"
    class="rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-300"
    @click="toggleTheme"
  >
    <span v-if="theme === 'dark'">
      ☀️ Light
    </span>

    <span v-else>
      🌙 Dark
    </span>
  </button>

</div>
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