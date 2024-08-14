module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  };
  