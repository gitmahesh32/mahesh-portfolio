import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const savedTheme = localStorage.getItem('portfolio-theme')

const systemPrefersDark = window.matchMedia('(prefers-color-scheme:dark)',).matches

const isDark = savedTheme === 'dark' || ( savedTheme !== 'light' && systemPrefersDark)

document.documentElement.classList.toggle('dark',isDark,)

createApp(App).mount('#app')
