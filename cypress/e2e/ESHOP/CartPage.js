// CartPage.js
import HomePage from './HomePage';
import LoginPage from './LoginPage';

class CartPage {
  get openCart() {
    return cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div > div');
  }

  get chekCart(){
    return cy.get('.shopping-cart-page');
  }

  get verifycheckOot(){
    return cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div > div');
  }
  termsOfService(){
    cy.get('#termsofservice').click();
  }
  productOpen(){
    cy.get('.product-grid > div:nth-child(1) .buttons > input').click();
  }
  clickTopOnProduct(){
    cy.get('#topcartlink > a').click();
  }
  clickRemove(){
    cy.get('.remove-from-cart > input[type=checkbox]').click();
  }
  updateCart(){
    cy.get('.update-cart-button').click();
  }

  checkOutButtonclick(){
    cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div > div > div.page-body > div > form > div.cart-footer > div.totals > div.checkout-buttons')
    .click();
  }




  

}

export default new CartPage();
