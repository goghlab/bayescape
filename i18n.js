// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import zhHKTranslation from './locales/zh-HK.json'; // Load your zh-HK translations

i18n
  .use(initReactI18next) // Initialize react-i18next
  .init({
    resources: {
      en: {
        translation: {
          // English translations (if needed)
        },
      },
      'zh-HK': {
        translation: zhHKTranslation, // Traditional Chinese (zh-HK) translations
      },
    },
    lng: 'zh-HK', // Set the default language
    fallbackLng: 'zh-HK', // Fallback to zh-HK if the requested language is not available
    interpolation: {
      escapeValue: false, // React components will handle interpolation
    },
  });

export default i18n;
