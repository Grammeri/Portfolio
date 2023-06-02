import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import ruTranslation from './locales/ru/translation.json';

const resources = {
    en: {
        translation: enTranslation,
    },
    ru: {
        translation: ruTranslation,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'ru',
        debug: true,
        detection: {
            order: ['queryString', 'cookie'],
            cache: ['cookie'],
        },
        interpolation: {
            escapeValue: false, // not needed for React as it escapes by default
        },
    });

export default i18n;
