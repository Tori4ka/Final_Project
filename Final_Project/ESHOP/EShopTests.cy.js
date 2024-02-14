// EShopTests.js
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import CartPage from './CartPage';
import WishlistPage from './WishlistPage';

describe('Verify Eshop site ', () => {
  const faker = require('faker');
  const generatedPassword = faker.internet.password();


  it('Verify that allows register a User', () => {
    HomePage.openHomePage();
    HomePage.loginButton();
    HomePage.loginName.type(faker.name.firstName());
    HomePage.loginLastName.type(faker.name.lastName());
    HomePage.loginMail.type(faker.internet.email());
    HomePage.loginPasword.type(generatedPassword);
    HomePage.confirmPasword.type(generatedPassword);
    HomePage.registerClick();
    HomePage.resultRegister.should('contain', 'Your registration completed');
  });

  it('Verify that allows login a User', () => {
    HomePage.openHomePage();
    LoginPage.loginUser('Antoinette.Williamson@gmail.com', 'wwjcP91p8XDXJwQ');
  });

  it('Verify that Computers group has 3 sub-groups with correct names', () => {
    HomePage.openHomePage();
    LoginPage.loginUser('Antoinette.Williamson@gmail.com', 'wwjcP91p8XDXJwQ');
    LoginPage.loginClick();
    LoginPage.categoryList.should('contain', 'Desktops', 'Notebooks', 'Accessories');
  });

  it('Verify that allows sorting items', () => {
    HomePage.openHomePage();
    LoginPage.loginUser('Antoinette.Williamson@gmail.com', 'wwjcP91p8XDXJwQ');
    HomePage.topMenuClicl();
    HomePage.productOrderBy.select('Name: Z to A');
    HomePage.productGrid.should('contain', 'Science');
    HomePage.productOrderBy.select('Price: Low to High');
    HomePage.productGrid.should('contain', '10');
  });

  it('Verify that allows changing the number of items on the page', () => {
    HomePage.openHomePage();
    LoginPage.loginUser('Antoinette.Williamson@gmail.com', 'wwjcP91p8XDXJwQ');
    HomePage.topMenuBookClick();
    HomePage.pageSize.select('4');
    HomePage.selectPage.should('have.length', 4);
  });

  it('Verify that allows adding an item to the Wishlist after login', () => {
    HomePage.openCategoryPage();
    LoginPage.loginUser('Antoinette.Williamson@gmail.com', 'wwjcP91p8XDXJwQ');
    WishlistPage.productOpen();
    cy.wait(5000);
    WishlistPage.addToList();
    WishlistPage.openWishlistPage.should('contain', 'Black & White Diamond Heart');
  });

  it('Verify that allows adding an item to the cart', () => {
    HomePage.openCategoryPage();
    CartPage.productOpen();
    CartPage.clickTopOnProduct();
    cy.wait(3000);
    CartPage.openCart.should('contain', 'Computing and Internet');
  });


  it('Verify that allows removing an item from the cart', () => {
    HomePage.openCategoryPage();
    CartPage.productOpen();
    CartPage.clickTopOnProduct();
    cy.wait(3000);
    CartPage.openCart.should('contain', 'Computing and Internet');
    CartPage.clickRemove();
    CartPage.updateCart();
    cy.wait(3000);
    CartPage.chekCart.should('contain', 'Your Shopping Cart is empty!');
  });

  it('Verify that allows checkout an item ', () => {
    HomePage.openHomePage();
    LoginPage.loginUser('Antoinette.Williamson@gmail.com', 'wwjcP91p8XDXJwQ');
    CartPage.clickTopOnProduct();
    cy.wait(3000);
    CartPage.openCart.should('contain', 'Computing and Internet');
    CartPage.termsOfService();
    CartPage.checkOutButtonclick();
    CartPage.verifycheckOot.should('contain', 'Checkout');
  });


});
