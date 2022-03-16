import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import EN from './locales/en.json'
import ID from './locales/id.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      id: {
        translation: ID,
      },
      en: {
        translation: EN,
      },
    },
    lng: localStorage.getItem('i18nextLng') || 'id',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
