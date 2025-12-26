module.exports = {
  preset: "jest-puppeteer",
  testMatch: ["<rootDir>/e2e/**/*.test.js"],
  globals: {
    URL: "http://localhost:9000", // URL вашего приложения
  },
  server: {
    port: 9000,
    launchTimeout: 30000,
  },
  maxWorkers: 1,
};
