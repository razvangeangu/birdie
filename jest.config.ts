import { type Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  projects: ['<rootDir>/apps/*', '<rootDir>/packages/*'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: ['**/src/**/*.{js,jsx,ts,tsx}', '!**/node_modules/**', '!**/__tests__/**'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    '^@loanable/(.*)$': '<rootDir>/packages/$1/src',
    '^@/(.*)$': '<rootDir>/apps/$1',
  },
};

export default config;
