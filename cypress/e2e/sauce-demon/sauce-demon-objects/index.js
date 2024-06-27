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

  verifyTextMatch = (locator, text) => {
    cy.get(locator).should('have.text', text);
  };

  enterValueInInput(selector, value) {
    if (value) {
      cy.get(selector).type(`${value}`);
    }
  }

  clickByText(text) {
    cy.contains(text).should('have.length', 1).click();
  }

  clickBySelector(selector) {
    cy.get(selector).click();
  }

  genearateAddToCartButtonId = (productName) =>
    'add-to-cart-' + productName.toLowerCase().split(' ').join('-');

  addItemToCart(productName) {
    const addToCartButtonId = this.genearateAddToCartButtonId(productName);
    cy.get(`#${addToCartButtonId}`).click();
  }

  getPriceOfProduct = (productName) =>
    cy
      .get(`div[data-test="inventory-item"]:contains(${productName})`)
      .debug()
      .find('[data-test="inventory-item-price"]')
      .invoke('text')
      .then((price) => price.trim());

  loginWithCredential(username, password) {
    this.enterValueInInput('#user-name', username);
    this.enterValueInInput('#password', password);
    this.clickByText('Login');
  }
}
