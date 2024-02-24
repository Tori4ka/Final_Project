import AboutPage from "./aboutPage";


class HomePage {
  open() {
    cy.visit('https://www.epam.com/');
  }

///Check the ability to switch between mode
  get header() {
    return cy.get('#wrapper > div.header-container.iparsys.parsys > div.header.section > header > div > div');
  }

  clickSwitcher() {
    this.switcher.click();
  }

  get switcher() {
    return cy.get('div.header.section > header > div > div > section > div');
  }

///Check the policies list

  clickpolicyInvestors() {
    this.investors.click();
  }

  clickcookiesPolicy() {
    this.cookiesPolicy.click();
  }

  get policiesList() {
    return cy.get('.policies li');
  }

  clickpoliciesAcceptButton() {
    this.policiesAcceptButton.click();
  }

  get policiesAcceptButton() {
    return cy.get('#onetrust-accept-btn-handler');
  }
  ///Check the search function
  get searchResults() {
    return cy.get('.search-results__item');
  }

  clicksfindButton() {
    this.findButton.click();
    return this;
  }

  get findButton() {
    return cy.get('.header-search__panel button');
  }

  get searchInput() {
    return cy.get('#new_form_search');
  }

    typeInSearchField(text) {
      this.searchInput
          .type('AI');
      return this;
    }

  clickSearchIcon() {
    this.searchIcon.click();
    return this;
  }

  get searchIcon() {
    return cy.get('span.search-icon');
  }

///Check that allow to switch location list by region

  get locationList() {
    return cy.get('div.js-tabs-links-list a');
  }

  clickPoliciesAcceptButton() {
    this.policiesAcceptButton.click();
  }

  get policiesAcceptButton() {
    return cy.get('#onetrust-accept-btn-handler');
  }
  ///Check that allows changing language to UA


  get checkCurrentLink() {
    return cy.origin('https://careers.epam.ua', () => {
    });
  }

    clickAboutButton() {
      this.aboutButton.click();
      return new AboutPage();
    }

    get aboutButton(){
     // return cy.get(aboutButton);
      return cy.get('#wrapper .top-navigation__item span.top-navigation__item-text:contains("About") a');
    }
  get errorVerify() {
    return cy.on('uncaught:exception', (e) => {
      if (e.message.includes('Things went bad')) {
        return false;
      }
    });
  }

  clickUaLanguageOption() {
    this.LanguageList.click();
    this.clickUaLanguage();
    return this;
  }

  get LanguageList() {
    return cy.get('nav.location-selector__panel[style=\'display: block;\']');
  }

  get uaLanguageLink() {
    return cy.get(".location-selector__link").contains("Україна");
  }
  
  clickUaLanguage() {
    this.uaLanguageLink.click();
  }

  clickLanguageButton() {
    this.languageButton.click();
    return this;
  }

  get languageButton() {
    return cy.get('.location-selector__button > .location-selector__button-language');
  }


}

export default HomePage;
