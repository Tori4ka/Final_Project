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

  get verifycheckOut(){
    return cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div > div');
  }
  termsOfServiceClick(){
    this.termsOfService.click();
    return this;
  }

  get termsOfService(){
    return cy.get('#termsofservice');
  }

  addToCart(){
    this.addToCardButton.click();
    return this;
  }
  get addToCardButton(){
    return cy.get('.product-grid > div:nth-child(1) .buttons > input');
  }
  shoppingCartButton(){
    this.cartButton.click();
    return this;
  }
  get cartButton(){
    return cy.get('#topcartlink > a');
  }


  clickRemove(){
    this.removeButton.click();
    return this;
  }
  get removeButton(){
    return cy.get('.remove-from-cart > input[type=checkbox]');
  }

  updateCart(){
    this.updateCartButton.click();
    return this;
  }
  get updateCartButton(){
    return cy.get('.update-cart-button') ;
  }


  get checkoutButtons() {
    return cy.get('.totals > div.checkout-buttons');
  }
  checkOutButtonclick() {
    this.checkoutButtons.click();
    return this;
  }


}

export default new CartPage();
