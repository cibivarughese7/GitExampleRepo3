// Generated from: tests\features\aiworkshop.feature
import { test } from "playwright-bdd";

test.describe('AI Workshop Waitlist', () => {

  test('Open AI Workshop and join the waitlist', async ({ Given, When, Then, And, page }) => { 
    await Given('I navigate to "https://practicetestautomation.com/"'); 
    await When('I click on the AI Workshop menu', null, { page }); 
    await And('I enter waitlist email "testuser123@example.com"', null, { page }); 
    await And('I select the timezone, framework and source', null, { page }); 
    await And('I click on the join the waitlist button', null, { page }); 
    await Then('I should see the waitlist message "on the waitlist"', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\aiworkshop.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://practicetestautomation.com/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://practicetestautomation.com/\"","children":[{"start":15,"value":"https://practicetestautomation.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I click on the AI Workshop menu","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I enter waitlist email \"testuser123@example.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"testuser123@example.com\"","children":[{"start":24,"value":"testuser123@example.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And I select the timezone, framework and source","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And I click on the join the waitlist button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the waitlist message \"on the waitlist\"","stepMatchArguments":[{"group":{"start":34,"value":"\"on the waitlist\"","children":[{"start":35,"value":"on the waitlist","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end