export class QaPracticePage {
  navigateToTextAreaPage() {
    cy.visit('https://www.qa-practice.com/elements/textarea/single');
  }

  verifyTextExistence(text, doesExist = true) {
    if (doesExist) {
      cy.contains(text).should('exist');
    } else {
      cy.contains(text).should('not.exist');
    }
  }

  enterInputValue(selector, value) {
    cy.get(selector).type(`${value}{enter}`);
  }

  clickByText(text) {
    cy.contains(text).should('have.length', 1).click();
  }
}
