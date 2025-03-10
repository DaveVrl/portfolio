import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationES from './dictionary/es.json';
import translationEN from './dictionary/en.json';

const storedLanguage = localStorage.getItem('language');

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      es: { translation: translationES },
    },
    lng: storedLanguage || 'es', // Usar el idioma almacenado o predeterminado
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;