// Generated from: tests\features\excel.feature
import { test } from "playwright-bdd";

test.describe('Excel Data Driven Login', () => {

  test('Verify login with valid credentials', async ({ Given, When, Then, page }) => { 
    await Given('User launches the SauceDemo application', null, { page }); 
    await When('User enters login credentials from Excel'); 
    await Then('User should successfully login'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\excel.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the SauceDemo application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User enters login credentials from Excel","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User should successfully login","stepMatchArguments":[]}]},
]; // bdd-data-end