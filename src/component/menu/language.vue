<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import { onMounted, ref } from 'vue';

const languageStore = useLanguageStore()
const langs = ref<string>('')

onMounted(() => {
  langs.value = languageStore.getLanguage()
})

if (langs.value === 'zh') {
  langs.value = 'zh'
} else {
  langs.value = 'en'
}

interface Props {
  selectLang: string;
}
const props = defineProps<Props>();

</script>

<template>
  <div class="language">
    <span>语言：</span>
    <div class="language-select">
      <p :class="{ 'active': langs === 'zh' }" :style="{ color: props.selectLang === 'zh' ? '#a3c6da' : 'black' }">zn
      </p>
      <div class="divider"></div>
      <p :class="{ 'active': langs === 'en' }" :style="{ color: props.selectLang === 'en' ? '#a3c6da' : 'black' }">en
      </p>
    </div>
  </div>
</template>

<style scoped>
.language {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.language-select {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  align-items: center;
  width: 80px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.divider {
  width: 1px;
  height: 30px;
  background-color: #ccc;
}

.active {
  color: #a3c6da;
}
</style>