import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

import translationDE from './locales/de/translation';
import translationPER from './locales/per/translation';
import translationEng from './locales/eng/translation';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources : {
            'fa-IR': {
                translation: translationPER
            },
            'Eng': {
                translation: translationEng
            },
            'DE': {
                translation: translationDE
            },
        },
        lng: "fa-IR",
        fallbackLng: "fa-IR",

        interpolation: {
            escapeValue: false
        }
    });
export default i18n;
