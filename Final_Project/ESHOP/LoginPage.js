// LoginPage.js
class LoginPage {
    loginUser(email, password) {
      cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.header > div.header-links-wrapper > div.header-links > ul > li:nth-child(2) > a').click();
      cy.get('#Email').type(email);
      cy.get('#Password').type(password);
      cy.get('input[value="Log in"]').click();
      cy.get('.topic-html-content-title > h2').should('contain', 'Welcome to our store');
    }
    loginClick(){
      cy.get('.listbox > ul > li:nth-child(2) > a').click();
    }

    get categoryList(){
      return cy.get('.sub-category-grid');
    }
  }

  
  export default new LoginPage();
  