import { i18nConfig } from '@/i18n/config';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.mock('@/i18n');

jest.mock('react-i18next', () => ({
  initReactI18next: {
    type: '3rdParty',
    init: jest.fn(),
  },
  useTranslation: () => ({
    t: (i18nKey: string) => i18nKey,
    i18n: { language: i18nConfig.defaultLocale },
  }),
}));

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);
