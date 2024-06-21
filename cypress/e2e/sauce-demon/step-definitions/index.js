import { SauceDemonPage } from '../sauce-demon-objects';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const sauceDemonPage = new SauceDemonPage();

Given('I open the sauce demon page', () => {
  sauceDemonPage.navigateToHome();
});

Then('text {string} is displayed', (text) => {
  sauceDemonPage.verifyTextExistence(text, true);
});

When(
  'I attempt to log in with the following credentials:',
  async (dataTable) => {
    const rows = dataTable.rows();
    for (let i = 1; i < rows.length; i++) {
      const username = rows[i][0];
      const password = rows[i][1];
      sauceDemonPage.loginWithCredential(username, password);
      sauceDemonPage.verifyTextExistence('Swag Labs');
    }
  }
);