<script lang="ts" setup>
import { Language, Theme } from '@/component/menu'
import { setI18nLocale } from '@/i18n'
import { useLanguageStore } from '@/stores/language'
import { useThemeStore } from '@/stores/theme'
import type { lang } from '@/types/language'
import type { theme } from '@/types/theme'
import { onMounted, ref, watch } from 'vue'

const languageStore = useLanguageStore()
const themeStore = useThemeStore()

const selectLang = ref<lang>('zh')
const selectTheme = ref<theme>('light')

onMounted((): void => {
  selectLang.value = languageStore.getLanguage()
  languageStore.language = selectLang.value
  selectTheme.value = themeStore.getTheme()
  themeStore.theme = selectTheme.value
})
const toggleLanguage = (): void => {
  languageStore.saveLanguage(languageStore.language === 'zh' ? 'en' : 'zh')
  selectLang.value = languageStore.language
}

const toggleTheme = (): void => {
  themeStore.saveTheme(themeStore.theme === 'light' ? 'dark' : 'light')
  selectTheme.value = themeStore.theme
}

watch(selectTheme, (newTheme: theme) => {
  if (newTheme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}, { immediate: true })

watch(selectLang, (newLang: lang) => {
  setI18nLocale(newLang)
}, { immediate: true })

</script>

<template>
  <ul class="menu">
    <div class="box"></div>
    <li @click="toggleLanguage">
      <Language :selectLang="selectLang" />
    </li>
    <li @click="toggleTheme">
      <Theme :selectTheme="selectTheme" />
    </li>
  </ul>
</template>

<style scoped>
.menu {
  position: absolute;
  top: 72px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 190px;
  height: 110px;
  padding: 10px 5px;
  border-radius: 10px;
  background: var(--menu-color);
  box-shadow: var(--shadow-color);
}

.menu li {
  flex: 1;
  border-radius: 5px;
  padding: 0px 5px;
}

.menu li:active {
  background-color: rgba(0, 0, 0, 0.1);
}

.box {
  position: absolute;
  top: -7%;
  left: 73%;
  width: 15px;
  height: 15px;
  transform: rotate(45deg);
  background-color: var(--menu-color);
}

@media (max-width: 768px) {
  .menu {
    top: 65px
  }

  .box {
    left: 83%;
  }
}
</style>