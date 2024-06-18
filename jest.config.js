module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [require.resolve('@testing-library/jest-dom/extend-expect')],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1'
  }
};
