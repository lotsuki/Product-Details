module.exports = {
  setupFiles: ["<rootDir>/spec/setUpTests.js"],
  testResultsProcessor: process.env.CI ? "jest-junit" : null
};
