// // server/i18n/index.js
// import i18next from 'i18next';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Leer los archivos JSON
// const loadTranslations = () => {
//     const es = JSON.parse(fs.readFileSync(path.join(__dirname, '../../src/translations/locales/es/translation.json'), 'utf8'));
//     const en = JSON.parse(fs.readFileSync(path.join(__dirname, '../../src/translations/locales/en/translation.json'), 'utf8'));
//     const pt = JSON.parse(fs.readFileSync(path.join(__dirname, '../../src/translations/locales/pt/translation.json'), 'utf8'));

//     return { es, en, pt };
// };

// const translations = loadTranslations();

// i18next.init({
//     resources: {
//         es: { translation: translations.es },
//         en: { translation: translations.en },
//         pt: { translation: translations.pt }
//     },
//     lng: 'es',
//     fallbackLng: 'es',
//     interpolation: {
//         escapeValue: false
//     }
// });

// export default i18next;