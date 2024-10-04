import { create } from 'zustand';

export const Languages = {
  ENGLISH: 'English',
  JAPANESE: 'Japanese',
} as const;

export type Language = (typeof Languages)[keyof typeof Languages]; // Export the Language type

interface IApplicationSettingsStore {
  selectedLanguage: Language;
  setLanguage: (language: Language) => void;
}

export const useApplicationSettingsStore = create<IApplicationSettingsStore>()(
  (set) => ({
    selectedLanguage: Languages.ENGLISH, // Default language
    setLanguage: (language: Language) => {
      set({ selectedLanguage: language });
    },
  }),
);
