// WishlistPage.js
import HomePage from './HomePage';
import LoginPage from './LoginPage';

class WishlistPage {

  productOpenClick(){
    this.productOpen.click();
    return this;
  }

  get productOpen(){ //todo: too long locator and not understandable... it is a locator of second image on the page
    return cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.center-2 > div.page.category-page > div.page-body > div.product-grid > div:nth-child(2) > div > div.picture > a > img');
  }

  JewelryClick(){
    this.Jewelry.click();
    return this;
  }

  get Jewelry(){ //todo: too long locator. And its name should contain type of element and starts from the small letter - jewelryLink . And be not on this page, but on the Home Page()
    return cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.leftside-3 > div.block.block-category-navigation > div.listbox > ul > li:nth-child(6) > a');
  }
  
  addToList(){//todo: this method should be on the Home Page
    this.addToListButton.click();
    return this;
  }

  get addToListButton(){//todo it is addToWishListButton - you should specify type of list, because you have a button with AddToCompareList
    return cy.get('#add-to-wishlist-button-14');
  }

openWishList(){ //todo: this method should be on the Home Page and  return new WishList Page()
  this.WishlistPage.click(); //todo this method should have a name clickWishlistLink()
  return this;
}
  
  get WishlistPage(){//todo: too long locator and methods name cannot start with a Capital letter
    //todo: it is not locator of WishListPage....
    return cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.header > div.header-links-wrapper > div.header-links > ul > li:nth-child(4) > a > span.cart-label');
  }

  get findItem(){//todo: too long locator
    //todo: what is findItem??? as I see it is productsList, and simple locator is "tr .product a"
    return cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div > div > div.page-body > div.wishlist-content > form > table > tbody > tr > td.product > a');
  }

}



export default new WishlistPage();
