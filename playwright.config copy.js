const { defineConfig } = require('@playwright/test');
const { defineBddConfig } = require('playwright-bdd');

const testDir = defineBddConfig({
  features: 'tests/features/**/*.feature',
  steps: 'tests/steps/**/*.js',
});

module.exports = defineConfig({
  testDir,
  reporter: 'html',

  workers: 1,             // only one worker = tests run one by one
  fullyParallel: false,   // don't parallelize tests inside a file

  use: { headless: false },
});