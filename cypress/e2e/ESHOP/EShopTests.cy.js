import HomePage from './HomePage';
import LoginPage from './LoginPage';
import CartPage from './CartPage';
import WishlistPage from './WishlistPage';

describe('Verify Eshop site ', () => {
  const faker = require('faker');
  const generatedPassword = faker.internet.password();

  it('Verify that allows register a User', () => {
    HomePage.openHomePage()
      .loginButtonClick()
      .fillRegistrationForm(
        faker.name.firstName(),
        faker.name.lastName(),
        faker.internet.email(),
        generatedPassword
      )
      .clickRegisterButton()
      .verifyRegistrationSuccessMessage();//todo: all assertions must be kept in this file
});

  it('Verify that allows login a User', () => {
    HomePage.openHomePage();
    LoginPage.fillLoginForm('Antoinette.Williamson@gmail.com', 'wwjcP91p8XDXJwQ')
      .clickLoginButton()
      .verifyWelcomeMessage.should('contain', 'Welcome to our store');
  });



  it('Verify that Computers group has 3 sub-groups with correct names', () => {
    HomePage.openHomePage();
    LoginPage.categoryComputerClick() //todo: Why this method and locator are on the Login Page? it should be on the Home page or on the Base Page if you need access for it from Home and from Login page
    .categoryList.should('contain', 'Desktops', 'Notebooks', 'Accessories');//todo: it works not correctly because checking only "Desktops", use separate should for each item
  });


  it('Verify that allows sorting items', () => {
    HomePage.openHomePage()
      .firstItemTopMenuClick()
      .productOrderBy.select('Name: Z to A');
    HomePage.getProductTitles().then(titles => {
      expect(titles).to.deep.equal(titles.sort().reverse());
    });
    HomePage.productOrderBy.select('Price: Low to High'); 
    HomePage.getProductPrices().then(prices => {
      expect(prices).to.deep.equal([...prices].sort((a, b) => a - b));
    });
  });


  it('Verify that allows changing the number of items on the page', () => {
    HomePage.openHomePage(); //todo: continue chain
    HomePage.firstItemTopMenuClick()
    .pageSize.select('4');
    HomePage.selectPage //todo: it is not selectPage getter, you are checking number of products on the page
    .should('have.length', 4); 
  });

  it('Verify that allows adding an item to the Wishlist after login', () => {
    HomePage.openCategoryPage();//todo: here should be additional method of clicking on login link and then filling login form
    LoginPage.fillLoginForm('Antoinette.Williamson@gmail.com', 'wwjcP91p8XDXJwQ')
    .clickLoginButton();
    WishlistPage.JewelryClick()//todo: you are clicking on it from Home Page after login, not from wishListPage
    .productOpenClick() //todo: strange locator and method
    .addToList()
    .openWishList()//this method just like the previous should be on the Home Page, and next one in Wishlist Page
    .findItem.should('contain', 'Black & White Diamond Heart');// todo it is a hard code version.... if this item will be removed from the data base, then name of chosen second item will be different and test would fail
  });

  it('Verify that allows adding an item to the cart', () => {
    HomePage.openCategoryPage();
    CartPage.addToCart() 
    .shoppingCartButton()
    .openCart.should('contain', 'Computing and Internet'); 
  });


  it('Verify that allows removing an item from the cart', () => {
    HomePage.openCategoryPage();
    CartPage.addToCart()
    .shoppingCartButton()
    .openCart.should('contain', 'Computing and Internet');
    CartPage.clickRemove()
    .updateCart()
    .chekCart.should('contain', 'Your Shopping Cart is empty!');
  });

  it('Verify that allows checkout an item ', () => {
    HomePage.openHomePage();
    LoginPage.fillLoginForm('Antoinette.Williamson@gmail.com', 'wwjcP91p8XDXJwQ')
    .clickLoginButton();
    CartPage.shoppingCartButton()
    .openCart.should('contain', 'Computing and Internet');
    CartPage.termsOfServiceClick()
    .checkOutButtonclick()
    .verifycheckOut.should('contain', 'Checkout');
  });


});
