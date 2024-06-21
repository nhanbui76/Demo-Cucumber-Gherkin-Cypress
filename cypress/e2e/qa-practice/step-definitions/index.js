import { QaPracticePage } from '../qa-practice-objects';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const qaPracticePage = new QaPracticePage();

Given('I open the text-area page', () => {
  qaPracticePage.navigateToTextAreaPage();
});

When('I click the {string} button', (text) => {
  qaPracticePage.clickByText(text)
})

When('I fill in the form field with value:', (docstring) => {
  qaPracticePage.enterInputValue(docstring);
});

When('I click the {string} link', (linkTextToClick) => {
  qaPracticePage
  .clickAnchorByText(linkTextToClick)
})

Then('text is displayed:', (docstring) => {
  qaPracticePage.verifyTextExistence(docstring, true);
});