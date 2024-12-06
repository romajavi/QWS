import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar traducciones
import es from '../../src/translations/locales/es/translation.json';
import en from '../../src/translations/locales/en/translation.json';
import pt from '../../src/translations/locales/pt/translation.json';

const resources = {
    es: { translation: es },
    en: { translation: en },
    pt: { translation: pt }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'es',
        interpolation: { escapeValue: false },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
        }
    });

export default i18n;