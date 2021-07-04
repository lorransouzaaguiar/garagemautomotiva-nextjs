module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
  },
  bail: true,
  clearMocks: true,
  testMatch: ['**/test/**/*.test.ts?(x)'],
};
