import { createI18n } from "vue-i18n";
import zh from "./locale/zn.json";
import en from "./locale/en.json";
import type { lang } from "@/types/language";

export function setI18nLocale(lang: lang) {
  i18n.global.locale.value = lang;
}

const i18n = createI18n({
  legacy: false, // 使用 Composition API
  locale: 'zh',
  globalInjection: true,
  fallbackLocale: "zh",
  messages: {
    zh,
    en,
  },
});

export default i18n;
