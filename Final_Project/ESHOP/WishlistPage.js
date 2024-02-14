// WishlistPage.js
import HomePage from './HomePage';
import LoginPage from './LoginPage';

class WishlistPage {

  productOpen(){
    cy.get('.product-grid > div:nth-child(2) .details > h2 > a').click();
  }
  
  addToList(){
    cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.header > div.header-links-wrapper > div.header-links > ul > li:nth-child(4) > a').click();
  }
  
  get openWishlistPage(){
    return cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div > div > div.page-body > div.wishlist-content > form > table > tbody > tr > td.product');
  }

}

export default new WishlistPage();
