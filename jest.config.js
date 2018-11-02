module.exports = {
  setupFiles: ["./database/test/setup.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  globalSetup: "./database/test/setup.js",
  globalTeardown: "./database/test/teardown.js",
  testEnvironment: "./database/test/mongo-env.js"
};
