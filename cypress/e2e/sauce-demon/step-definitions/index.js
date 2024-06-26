import { SauceDemonPage } from '../sauce-demon-objects';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const sauceDemonPage = new SauceDemonPage();

let productPagePrice = {};

Given('I open the sauce demon page', () => {
  sauceDemonPage.navigateToHome();
});

Given(
  'I attempt to log in with username: {string} and password: {string}',
  (username, password) => {
    sauceDemonPage.loginWithCredential(username, password);
  }
);

// When('I attempt to log in with the following credentials:', async (dataTable) => {
//   const rows = dataTable.rows();
//   for (let i = 1; i < rows.length; i++) {
//     const username = rows[i][0];
//     const password = rows[i][1];
//     sauceDemonPage.loginWithCredential(username, password);
//     sauceDemonPage.verifyTextExistence('Swag Labs');
//   }
// });
// When I attempt to log in with the following credentials:
// | username      | password     |
// | standard_user | secret_sauce |
// | visual_user   | secret_sauce |

When('I add these items to cart:', (dataTable) => {
  const rows = dataTable.rows();
  for (let i = 0; i < rows.length; i++) {
    const productName = rows[i][0];
    sauceDemonPage.addItemToCart(productName);
    sauceDemonPage.getPriceOfProduct(productName).then((price) => productPagePrice[productName] = price)
  }
});

When('my cart should have the following items:', (dataTable) => {
  const rows = dataTable.rows();
  for (let i = 0; i < rows.length; i++) {
    const productName = rows[i][0];
    sauceDemonPage.verifyTextExistence(productName);
    sauceDemonPage.getPriceOfProduct(productName).then((productPrice) => {
      expect(productPagePrice[productName]).to.eq(productPrice);
    })
  }
});

When('I click cart icon', () => {
  sauceDemonPage.clickBySelector('#shopping_cart_container');
});

Then('text {string} is displayed', (text) => {
  sauceDemonPage.verifyTextExistence(text);
});

Then('cart has {int} items', (numberOfItems) => {
  sauceDemonPage.verifyTextMatch('[data-test="shopping-cart-badge"]', numberOfItems.toString());
});
