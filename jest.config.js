module.exports = {
  name: 'unit-tests',
  displayName: 'unit-tests',
  rootDir: './',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '\/__tests__\/unit\/[a-z0-9-\/]*\\.(spec|test)\\.(jsx?|tsx?)',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85
    }
  },
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