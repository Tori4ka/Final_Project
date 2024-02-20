// EShopTests.js
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import CartPage from './CartPage';
import WishlistPage from './WishlistPage';

describe('Verify Eshop site ', () => {
  const faker = require('faker');
  const generatedPassword = faker.internet.password();
//todo створи const homePage = new HomePage(); і використовуй його

  it('Verify that allows register a User', () => {
    HomePage.openHomePage(); //todo додай ретурн і використовуй чейн (в усіх тестах), в цьому методі вьюпорт непотрібен, бо у тебе він вказаний в конфігі
    HomePage.loginButton(); // todo метод - це якась дія, а у тебе натискання на кнопку,а  не просто кнопка в назві має бути
    HomePage.loginName.type(faker.name.firstName()); //todo всі заповнення філдів поклади в методи ПОМ, щоб можна було використовувати чейн
    HomePage.loginLastName.type(faker.name.lastName());
    HomePage.loginMail.type(faker.internet.email());
    HomePage.loginPasword.type(generatedPassword);
    HomePage.confirmPasword.type(generatedPassword);
    HomePage.registerClick(); //todo називай методи правильно і читаємо - clickRegisterButton(). Ти метод кліку змішала з гетером, вони мають бути окремо - геттер, і метод, що його викликає і натискає
    HomePage.resultRegister.should('contain', 'Your registration completed');
  });

  it('Verify that allows login a User', () => {
    HomePage.openHomePage();
    LoginPage.loginUser('Antoinette.Williamson@gmail.com', 'wwjcP91p8XDXJwQ'); //todo Ти метод заповнення змішала з гетером, і ше шуд у тебе теж чомусь в методі, а має бути тут, в тесті
  });

  it('Verify that Computers group has 3 sub-groups with correct names', () => {
    HomePage.openHomePage();
    LoginPage.loginUser('Antoinette.Williamson@gmail.com', 'wwjcP91p8XDXJwQ'); //todo Навіщо тут логінитися?
    LoginPage.loginClick(); //todo Що це за локатор? Який логін? Ти метод кліку змішала з гетером
    LoginPage.categoryList.should('contain', 'Desktops', 'Notebooks', 'Accessories');
  });

  it('Verify that allows sorting items', () => {
    HomePage.openHomePage();
    LoginPage.loginUser('Antoinette.Williamson@gmail.com', 'wwjcP91p8XDXJwQ');  //todo Навіщо тут логінитися?
    HomePage.topMenuClicl();//todo Що це за метод? Я бачу, що клік на першому айтему меню, але в назві це не вказано
    HomePage.productOrderBy.select('Name: Z to A');
    HomePage.productGrid.should('contain', 'Science'); //todo Що це за назва локатору? я бачу, що це перший айтем результату, але книжку з цією назвою можуть забрати, і тест зафейлиться, некоректна перевірка
    //todo Щоб зробити перевірку сортінгу 'Name: Z to A' потрібно отримати список назв всіх айтемів і перевірити чи вони відсортовані в зворотньому порядку
    HomePage.productOrderBy.select('Price: Low to High');
    HomePage.productGrid.should('contain', '10');//todo Щоб зробити перевірку сортінгу по ціні потрібно отримати список цін всіх айтемів і перевірити чи вони відсортовані по зростанню
  });

  it('Verify that allows changing the number of items on the page', () => {
    HomePage.openHomePage();
    LoginPage.loginUser('Antoinette.Williamson@gmail.com', 'wwjcP91p8XDXJwQ');  //todo Навіщо тут логінитися?
    HomePage.topMenuBookClick(); //todo в чому різниця цього методу, openCategoryPage() і topMenuClicl() ?
    HomePage.pageSize.select('4');
    HomePage.selectPage.should('have.length', 4); //todo Що це за локатор? я бачу, що це список всіх продуктів на сторінці
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
    CartPage.productOpen(); //todo Цей локатор кнопки Add to cart у першого продукту, тому назва тут досить дивна
    CartPage.clickTopOnProduct();//todo Що це за локатор у цьому методі (їх як і решту варто роз'єднати)? має ж бути клік на ШопінгКартБатон
    cy.wait(3000);//todo такі вейтери не варто використовувати в коді, тут варто дочекатися поки щезне спінер
    CartPage.openCart.should('contain', 'Computing and Internet'); //todo Цей локатор чогось незрозумілого, варто було б взяти локатор списку продуктів у корзині, а не всього тіла корзини
  });


  it('Verify that allows removing an item from the cart', () => {
    HomePage.openCategoryPage();
    CartPage.productOpen();
    CartPage.clickTopOnProduct();
    cy.wait(3000); //todo такі вейтери не варто використовувати в коді,
    CartPage.openCart.should('contain', 'Computing and Internet');
    CartPage.clickRemove();
    CartPage.updateCart();
    cy.wait(3000); //todo такі вейтери не варто використовувати в коді,
    CartPage.chekCart.should('contain', 'Your Shopping Cart is empty!');
  });

  it('Verify that allows checkout an item ', () => {
    HomePage.openHomePage();
    LoginPage.loginUser('Antoinette.Williamson@gmail.com', 'wwjcP91p8XDXJwQ');
    CartPage.clickTopOnProduct();
    cy.wait(3000); //todo такі вейтери не варто використовувати в коді,
    CartPage.openCart.should('contain', 'Computing and Internet');
    CartPage.termsOfService();//todo дія., яка робиться в методі, повинна бути вказана в назві
    CartPage.checkOutButtonclick();//todo спрости локатор і винеси гетер і метод кліку окремо
    CartPage.verifycheckOot.should('contain', 'Checkout');
  });


});
