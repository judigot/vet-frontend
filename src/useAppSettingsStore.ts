import { create } from 'zustand';

const Languages = {
  ENGLISH: 'English',
  JAPANESE: 'Japanese',
} as const;

type Language = (typeof Languages)[keyof typeof Languages];

interface IApplicationSettingsStore {
  selectedLanguage: Language;
  setLanguage: (language: Language) => void;
}

export const useApplicationSettingsStore = create<IApplicationSettingsStore>()(
  (set) => ({
    selectedLanguage: Languages.ENGLISH,
    setLanguage: (language: Language) => {
      set({ selectedLanguage: language });
    },
  }),
);
