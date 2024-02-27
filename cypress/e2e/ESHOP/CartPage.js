// CartPage.js
import HomePage from './HomePage';
import LoginPage from './LoginPage';

class CartPage {
  get openCart() {//todo it is a locator oh whole page, you don't need it. Your purpose is to check a list of products on your Cart "tr .product a"
    return cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div > div');
  }

  get chekCart(){ //todo it is a locator oh whole page, you don't need it. Your purpose is to check a list of products
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
  get addToCardButton(){//todo this locator and method should be on the HomePage
    return cy.get('.product-grid > div:nth-child(1) .buttons > input');
  }
  shoppingCartButton(){//todo : it is a method of clicking, you should specify it in the name. And it should be on the Home Page and return new CartPage()
    this.cartButton.click();
    return this;
  }
  get cartButton(){ //todo it is not button, it is a link, you can see it even on your locator
    return cy.get('#topcartlink > a');
  }


  clickRemove(){
    this.removeButton.click();
    return this;
  }
  get removeButton(){//todo it is not button, it is checkboxes list
    return cy.get('.remove-from-cart > input[type=checkbox]');
  }

  updateCart(){//todo: specify the action in the name
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
