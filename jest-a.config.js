module.exports = {
  name: 'automation-tests',
  displayName: 'automation-tests',
  rootDir: './',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '\/__tests__\/automation\/[a-z0-9-\/]*\\.(spec|test)\\.(jsx?|tsx?)',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/functions/',
    '<rootDir>/*.module.ts'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/functions/',
    '<rootDir>/*.module.ts',
    '<rootDir>/dist/'
  ],
  testResultsProcessor: 'jest-sonar-reporter'
};