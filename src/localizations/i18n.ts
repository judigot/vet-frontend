import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/localizations/en.json';
import enAppointments from '@/localizations/en-Appointments.json';
import enReminders from '@/localizations/en-Reminders.json';
import ja from '@/localizations/ja.json';
import jaAppointments from '@/localizations/ja-Appointments.json';
import jaReminders from '@/localizations/ja-Reminders.json';

const resources = {
  English: {
    translation: {...en, ...enAppointments, ...enReminders},
  },
  Japanese: {
    translation: {...ja, ...jaAppointments, ...jaReminders},
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
