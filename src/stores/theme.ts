import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { theme } from '@/types/theme'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<theme>('light')
  
  function saveTheme(themeValue: theme) {
    localStorage.setItem('theme', themeValue)
    theme.value = themeValue
  }
  
  function getTheme(): theme {
    return localStorage.getItem('theme') as theme || 'light'
  }
  
  return { theme, saveTheme, getTheme }
})
