module.exports = {
  verbose: true,
  modulePaths: ['<rootDir>/jest'],
  setupFiles: ['<rootDir>/jest/shim', '<rootDir>/jest/enzymeSetup'],
  setupTestFrameworkScriptFile: '<rootDir>/jest/jestSetup'
};
