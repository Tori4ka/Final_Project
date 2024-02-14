// HomePage.js
class HomePage {
    openHomePage() {
      cy.visit('https://demowebshop.tricentis.com');
      cy.viewport(1280, 720);
    }
  
    openCategoryPage() {
      this.openHomePage();
      cy.get('.top-menu > li:nth-child(1) > a').click();
    }
  
    openWishlistPage() {
      this.openHomePage();
      cy.get('.top-menu > li:nth-child(6) > a').click();
    }

    loginButton(){
      cy.get('.header-links > ul > li:nth-child(1) > a').click();
    }

    registerClick(){
      cy.get('#register-button').click();
    }

    topMenuClicl(){
      cy.get('.top-menu > li:nth-child(1) > a').click();
    }

    topMenuBookClick(){
      cy.get('.top-menu > li:nth-child(1) > a').click();
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
  }
  
  export default new HomePage();
  