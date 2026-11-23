// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Login Functionality', () => {

  test('Successful login with valid credentials', async ({ Given, When, Then }) => { 
    await Given('I navigate to "https://practicetestautomation.com/practice-test-login/"'); 
    await Given('I enter username "student"'); 
    await Given('I enter password "Password123"'); 
    await When('I click on the login button'); 
    await Then('I should see the page containing "Logged In Successfully"'); 
  });

  test.describe('Failed login with invalid credentials', () => {

    test('Example #1', async ({ Given, When, Then, page }) => { 
      await Given('I navigate to "https://practicetestautomation.com/practice-test-login/"'); 
      await Given('I enter username "student"'); 
      await Given('I enter password "Password"'); 
      await When('I click on the login button'); 
      await Then('I should see the error message "Your password is invalid!"', null, { page }); 
    });

    test('Example #2', async ({ Given, When, Then, page }) => { 
      await Given('I navigate to "https://practicetestautomation.com/practice-test-login/"'); 
      await Given('I enter username "wronguser"'); 
      await Given('I enter password "Password123"'); 
      await When('I click on the login button'); 
      await Then('I should see the error message "Your username is invalid!"', null, { page }); 
    });

    test('Example #3', async ({ Given, When, Then, page }) => { 
      await Given('I navigate to "https://practicetestautomation.com/practice-test-login/"'); 
      await Given('I enter username "wronguser"'); 
      await Given('I enter password "wrongpassword"'); 
      await When('I click on the login button'); 
      await Then('I should see the error message "Your username is invalid!"', null, { page }); 
    });

  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://practicetestautomation.com/practice-test-login/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://practicetestautomation.com/practice-test-login/\"","children":[{"start":15,"value":"https://practicetestautomation.com/practice-test-login/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I enter username \"student\"","stepMatchArguments":[{"group":{"start":17,"value":"\"student\"","children":[{"start":18,"value":"student","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I enter password \"Password123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Password123\"","children":[{"start":18,"value":"Password123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I click on the login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should see the page containing \"Logged In Successfully\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Logged In Successfully\"","children":[{"start":34,"value":"Logged In Successfully","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":17,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://practicetestautomation.com/practice-test-login/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://practicetestautomation.com/practice-test-login/\"","children":[{"start":15,"value":"https://practicetestautomation.com/practice-test-login/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I enter username \"student\"","stepMatchArguments":[{"group":{"start":17,"value":"\"student\"","children":[{"start":18,"value":"student","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given I enter password \"Password\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Password\"","children":[{"start":18,"value":"Password","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I click on the login button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message \"Your password is invalid!\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Your password is invalid!\"","children":[{"start":32,"value":"Your password is invalid!","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://practicetestautomation.com/practice-test-login/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://practicetestautomation.com/practice-test-login/\"","children":[{"start":15,"value":"https://practicetestautomation.com/practice-test-login/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I enter username \"wronguser\"","stepMatchArguments":[{"group":{"start":17,"value":"\"wronguser\"","children":[{"start":18,"value":"wronguser","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given I enter password \"Password123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Password123\"","children":[{"start":18,"value":"Password123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I click on the login button","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message \"Your username is invalid!\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Your username is invalid!\"","children":[{"start":32,"value":"Your username is invalid!","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":33,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://practicetestautomation.com/practice-test-login/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://practicetestautomation.com/practice-test-login/\"","children":[{"start":15,"value":"https://practicetestautomation.com/practice-test-login/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I enter username \"wronguser\"","stepMatchArguments":[{"group":{"start":17,"value":"\"wronguser\"","children":[{"start":18,"value":"wronguser","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given I enter password \"wrongpassword\"","stepMatchArguments":[{"group":{"start":17,"value":"\"wrongpassword\"","children":[{"start":18,"value":"wrongpassword","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I click on the login button","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message \"Your username is invalid!\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Your username is invalid!\"","children":[{"start":32,"value":"Your username is invalid!","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end