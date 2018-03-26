module.exports = {
  setupFiles: ['raf/polyfill'],
  setupTestFrameworkScriptFile: '<rootDir>/src/setupTests.js',
  moduleNameMapper: {
    '.css': '<rootDir>/src/__mocks__/styleMock.js',
  },
};
