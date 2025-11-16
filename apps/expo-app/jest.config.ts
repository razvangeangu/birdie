import { type Config } from 'jest';

const config: Config = {
  preset: 'jest-expo',
  collectCoverageFrom: [
    '**/*.{ts,tsx,js,jsx}',
    '!**/scripts/**',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/expo-env.d.ts',
    '!**/.expo/**',
    '!**/jest.config.ts',
    '!**/eslint.config.js',
    '!**/locales/i18n.ts',
    '!**/locales/types.ts',
    '!**/locales/i18next.d.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  coverageDirectory: '<rootDir>/../../coverage',
  moduleNameMapper: {
    '^@birdie/(.*)$': '<rootDir>/../../packages/$1/src',
    '^@/(.*)$': '<rootDir>/$1',
  },
};

export default config;
