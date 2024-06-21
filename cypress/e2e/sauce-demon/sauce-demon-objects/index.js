export class SauceDemonPage {
  navigateToHome() {
    cy.visit('https://www.saucedemo.com/');
  }

  verifyTextExistence(text, doesExist = true) {
    if (doesExist) {
      cy.contains(text).should('exist');
    } else {
      cy.contains(text).should('not.exist');
    }
  }

  enterValueInInput(selector, value) {
    cy.get(selector).type(`${value}{enter}`);
  }

  clickByText(text) {
    cy.contains(text).should('have.length', 1).click();
  }

  loginWithCredential(username, password) {
    this.enterValueInInput('#user-name', username);
    this.enterValueInInput('#password', password);
    this.clickByText('Login');
  }
}
