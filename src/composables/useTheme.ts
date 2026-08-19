import { ref } from "vue";
export type Theme = 'light' | 'dark' | 'system'

const theme = ref<Theme>('system')

const getSystemTheme = (): 'light' | 'dark' => {
    return window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark':'light'
}

const applyTheme = (selectedTheme: Theme) => {
    theme.value = selectedTheme
    const actualTheme = selectedTheme === 'system' ? getSystemTheme() : selectedTheme
    
    document.documentElement.classList.toggle('dark',       actualTheme=== 'dark',

    )
    localStorage.setItem('portfolio-theme',selectedTheme)
}

const initializeTheme = () => {
    const saveTheme = localStorage.getItem('portfolio-theme',)as Theme | null
    if(saveTheme === 'light' || saveTheme === 'dark' || saveTheme === 'system') {
        applyTheme(saveTheme)
    } else {
        applyTheme('system')
    }
}

export const useTheme = () => {
    return {
        theme,applyTheme,initializeTheme
    }
}


