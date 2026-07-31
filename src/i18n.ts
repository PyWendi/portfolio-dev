import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'

const savedLocale = localStorage.getItem('user-locale') || 'en'

const i18n = createI18n({
  legacy: false, // Set to false to use Composition API (t() function inside <script setup>)
  locale: savedLocale,
  fallbackLocale: 'en',
  messages: {
    en,
    fr
  }
})

export default i18n
