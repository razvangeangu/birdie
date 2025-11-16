import { i18nConfig } from '@/i18n/config';
import { getLocales } from 'expo-localization';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import de from '../messages/de.json';
import en from '../messages/en.json';
import es from '../messages/es.json';
import fr from '../messages/fr.json';
import ro from '../messages/ro.json';

// eslint-disable-next-line import/no-named-as-default-member
export const i18n = i18next
  .use(initReactI18next)
  .use({
    init: Function.prototype,
    type: 'languageDetector',
    detect: () => (getLocales()?.[0].languageCode || i18nConfig.defaultLocale)?.replace('_', '-'),
    cacheUserLanguage: Function.prototype,
  })
  .init({
    returnNull: false,
    resources: {
      de: {
        translation: de,
      },
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
      fr: {
        translation: fr,
      },
      ro: {
        translation: ro,
      },
    },
    fallbackLng: i18nConfig.defaultLocale,
    // debug: process.env.NODE_ENV !== 'production' && process.env.JEST_WORKER_ID === undefined,
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    compatibilityJSON: 'v4',
  });
