module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts'
  ],
  coverageDirectory: 'covare',
  coverageProvider: 'v8',
  testEnviromment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}