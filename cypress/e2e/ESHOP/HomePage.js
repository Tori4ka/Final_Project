// HomePage.js
class HomePage {
    openHomePage() {
      cy.visit('https://demowebshop.tricentis.com');
      return this;
    }
  
    openCategoryPage() {
      this.openHomePage();
      cy.get('.top-menu > li:nth-child(1) > a').click();
    }
  
    openWishlistPage() {
      this.openHomePage();
      cy.get('.top-menu > li:nth-child(6) > a').click();
    }

    loginButtonClick(){
      cy.get('.header-links > ul > li:nth-child(1) > a').click();
      return this;
    }

    registerClick(){
      cy.get('#register-button').click();
    }

    firstItemTopMenuClick(){
      this.firstItemTopMenu.click();
      return this;
    }

    get firstItemTopMenu(){
      return cy.get('.top-menu > li:nth-child(1) > a');
    }


    checkOutLogin(){
      cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.header > div.header-links-wrapper > div.header-links > ul > li:nth-child(2) > a')
        .click();
    }
    
    get loginName(){
      return cy.get('#FirstName');
    }
    
    get loginLastName(){
      return cy.get('#LastName');
    }

    get loginMail(){
      return cy.get('#Email');
    }

    get loginPasword(){
      return cy.get('#Password');
    }

    get confirmPasword(){
      return cy.get('#ConfirmPassword');
    }

    get resultRegister(){
      return cy.get('.result');
    }

    get productOrderBy(){
      return cy.get('#products-orderby');
    }
    get productGrid(){
      return cy.get('.product-grid > div:nth-child(1)');
    }

    get pageSize(){
      return cy.get('#products-pagesize');
    }

    get selectPage(){
      return cy.get('.product-grid .item-box');
    }


    fillRegistrationForm(firstName, lastName, email, password) {
      this.loginName.type(firstName);
      this.loginLastName.type(lastName);
      this.loginMail.type(email);
      this.loginPasword.type(password);
      this.confirmPasword.type(password);
      return this;  
    }
    clickRegisterButton() {
      this.registerClick();
      return this;  
    }  

    verifyRegistrationSuccessMessage() {
      this.resultRegister.should('contain', 'Your registration completed');
    }


    getProductTitles() {
      return cy.get('.product-title').invoke('text').then(titles => {
        return titles.replace(/&nbsp;/g, '').trim().split('\n');
      });
    };
    


    getProductPrices() {
      return cy.get('span.price.actual-price').invoke('text').then(prices => {
        
        if (typeof prices === 'string') {
          prices = prices.split(','); 
        }
        return prices.map(price => parseFloat(price.replace('$', '')));
      });
    }


  }
  
  export default new HomePage();
  