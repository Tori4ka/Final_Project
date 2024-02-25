// LoginPage.js
class LoginPage {

    categoryComputerClick(){
      this.computerCategory.click();
      return this;
    }

    get computerCategory(){
      return cy.get('.listbox > ul > li:nth-child(2) > a');
    }


    get categoryList(){
      return cy.get('.sub-category-grid');
    }

    get loginForm(){
      return cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div.header > div.header-links-wrapper > div.header-links > ul > li:nth-child(2) > a');
    }


    fillLoginForm(email, password) {
      this.loginForm.click();
      cy.get('#Email').type(email);
      cy.get('#Password').type(password);
      return this;  
    }
  
    clickLoginButton() {
      this.loginButton.click();
      return this; 
    }

    get loginButton(){
      return cy.get('input[value="Log in"]');
    }
  
    get verifyWelcomeMessage() {
     return cy.get('.topic-html-content-title > h2');
    }
  
  }


  
  
  export default new LoginPage();
  