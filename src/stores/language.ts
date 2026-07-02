import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { lang } from '@/types/language'

export const useLanguageStore = defineStore('language', () => {
  const language = ref<lang>('zh')
  
  function saveLanguage(lang: lang) {
    localStorage.setItem('language', lang)
    language.value = lang
  }
  
  function getLanguage(): lang {
    return localStorage.getItem('language') as lang || 'zh'
  }
  
  return { language, saveLanguage, getLanguage }
})
