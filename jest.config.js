module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', {
      configFile: ".swcrc"
    }],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',  // Adjust based on your project's folder structure
  },
  testEnvironment: 'jsdom',  // Ensures a DOM-like environment for React components
};
