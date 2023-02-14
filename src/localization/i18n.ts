import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEN from './en/translation.json';

export const defaultNS = 'translation';

export const resources = {
  en: {
    translation: translationEN,
  },
} as const;

i18n.use(initReactI18next).init({
  ns: ['translation'],
  defaultNS,
  resources,
  lng: 'en',
  fallbackLng: 'en',
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
});

export default i18n;
