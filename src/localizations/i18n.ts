import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/localizations/en.json';
import ja from '@/localizations/ja.json';

const resources = {
  English: {
    translation: en,
  },
  Japanese: {
    translation: ja,
  },
};

void i18n
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources,
    lng: 'English', // Default language
    fallbackLng: 'English', // Fallback language if translation is missing
    interpolation: {
      escapeValue: false, // React already escapes output by default
    },
  });

export default i18n;
