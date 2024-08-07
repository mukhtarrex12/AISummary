import i18n_Config from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import mainPageTranslations from './mainPageTranslations';
import experiencePageTranslations from './experiencePageTranslations';
import appBarTranslations from "./AppBarTranslations";

i18n_Config
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    ...mainPageTranslations.en,
                    ...experiencePageTranslations.en,
                    ...appBarTranslations.en,
                }
            },
            ru: {
                translation: {
                    ...mainPageTranslations.ru,
                    ...experiencePageTranslations.ru,
                    ...appBarTranslations.ru,
                }
            }
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n_Config;