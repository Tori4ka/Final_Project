// WishlistPage.js
import HomePage from './HomePage';
import LoginPage from './LoginPage';

class WishlistPage {

  productOpenClick(){
    this.productOpen.click();
    return this;
  }

  get productOpen(){
    return cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.center-2 > div.page.category-page > div.page-body > div.product-grid > div:nth-child(2) > div > div.picture > a > img');
  }

  JewelryClick(){
    this.Jewelry.click();
    return this;
  }

  get Jewelry(){
    return cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.leftside-3 > div.block.block-category-navigation > div.listbox > ul > li:nth-child(6) > a');
  }
  
  addToList(){
    this.addToListButton.click();
    return this;
  }

  get addToListButton(){
    return cy.get('#add-to-wishlist-button-14');
  }

openWishList(){
  this.WishlistPage.click();
  return this;
}
  
  get WishlistPage(){
    return cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.header > div.header-links-wrapper > div.header-links > ul > li:nth-child(4) > a > span.cart-label');
  }

  get findItem(){
    return cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div > div > div.page-body > div.wishlist-content > form > table > tbody > tr > td.product > a');
  }

}



export default new WishlistPage();
