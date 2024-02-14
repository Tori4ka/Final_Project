const activeCountry = '#id-890298b8-f4a7-3f75-8a76-be36dc4490fd > div.tabs-23__item.js-tabs-item.active > div > div > div.locations-viewer-23__country-list.active > div.locations-viewer-23__country-details.active > div.locations-viewer-23__locations-container--responsive > div > div.owl-stage-outer > div > div:nth-child(3) > div > h5';
const themeSwitcher = ':nth-child(3) > .theme-switcher';
const header = '#wrapper > div.header-container.iparsys.parsys > div.header.section > header > div > div';
const policiesAcceptButton = '#onetrust-accept-btn-handler';
const policiesList = '.policies > div > ul.ul';
const policyLeftLink = '.policies > div > ul.ul.policies-left > li:nth-child(1) > a';
const policyRightLink = '.policies > div > ul.ul.policies-right > li:nth-child(1) > a';
const policyLeftFirstItem = '.policies > div > ul.ul.policies-left > li:nth-child(2) > a';
const policyLeftSecondItem = '.policies > div > ul.ul.policies-left > li:nth-child(3) > a';
const policyRightFirstItem = '.policies > div > ul.ul.policies-right > li:nth-child(2) > a';
const policyRightSecondItem = '.policies > div > ul.ul.policies-right > li:nth-child(3) > a';
const searchIcon = '#wrapper > div.header-container.iparsys.parsys > div.header.section > header > div > div > ul > li:nth-child(3) > div > button > span.search-icon.dark-iconheader-search__search-icon';
const searchInput = '#new_form_search';
const searchButton = '#wrapper > div.header-container.iparsys.parsys > div.header.section > header > div > div > ul > li:nth-child(3) > div > div > form > div.search-results__action-section > button';
const searchResultsCounter = '.search-results__counter';
const locationList = '.section--padding-no';
const regionTab = (index) => `#id-890298b8-f4a7-3f75-8a76-be36dc4490fd > div.js-tabs-controls > div > div > div.tabs-23__title.js-tabs-title:nth-child(${index}) > a`;
const activeLocation = '#id-890298b8-f4a7-3f75-8a76-be36dc4490fd > div.tabs-23__item.js-tabs-item.active > div > div > div.locations-viewer-23__carousel.owl-loaded.owl-drag > div.owl-stage-outer > div > div:nth-child(6) > div > div > img';
const locationImage = '#id-890298b8-f4a7-3f75-8a76-be36dc4490fd > div.tabs-23__item.js-tabs-item.active > div > div > div.locations-viewer-23__carousel.owl-loaded.owl-drag > div.owl-stage-outer > div > div:nth-child(6) > div > div > img';
const languageButton = '.location-selector__button > .location-selector__button-language';
const uaLanguageOption = ':nth-child(6) > .location-selector__link';



class HomePage {
  open() {
    cy.visit('https://www.epam.com/');
  }
/*
Check have the correct title
  get checkTitle() {
    return cy.title();
  }
*/
///Check the ability to switch between mode
  get header() {
    return cy.get(header);
  }

  clickSwitcher() {
    this.switcher.click();
  }

  get switcher() {
    return cy.get(themeSwitcher);
  }

///Check the policies list
 get webAccessibility() {
    return cy.get(policyRightSecondItem);
  }

 get applicantPrivacyNotice() {
    return cy.get(policyRightFirstItem);
  }

  get privacyPolicy() {
    return cy.get(policyLeftSecondItem);
  }

  get openSource() {
    return cy.get(policyLeftFirstItem);
  }

  clickpolicyInvestors() {
    this.investors.click();
  }

  clickcookiesPolicy() {
    this.cookiesPolicy.click();
  }

  get cookiesPolicy() {
    return cy.get(policyRightLink);
  }

  get investors() {
    return cy.get(policyLeftLink);
  }

  get policiesList() {
    return cy.get(policiesList);
  }

  clickpoliciesAcceptButton() {
    this.policiesAcceptButton.click();
  }

  get policiesAcceptButton() {
    return cy.get(policiesAcceptButton);
  }
  ///Check the search function
  get searchResults() {
    return cy.get(searchResultsCounter);
  }

  clicksSearchButton() {
    this.searchButton.click();
  }

  get searchButton() {
    return cy.get(searchButton);
  }

  get searchInput() {
    return cy.get(searchInput);
  }

  clickSearchIcon() {
    this.searchIcon.click();
  }

  get searchIcon() {
    return cy.get(searchIcon);
  }

///Check that allow to switch location list by region
  get activeCountry() {
    return cy.get(activeCountry);
  }

  clicklocationImage() {
    this.locationImage.click();
  }

  get locationImage() {
    return cy.get(locationImage);
  }

  get activeLocation() {
    return cy.get(activeLocation);
  }

  regionTab(index) {
    return cy.get(regionTab(index));
  }

  get locationList() {
    return cy.get(locationList);
  }

  clickPoliciesAcceptButton() {
    this.policiesAcceptButton.click();
  }

  get policiesAcceptButton() {
    return cy.get(policiesAcceptButton);
  }
  ///Check that allows changing language to UA


  get checkCurrentLink() {
    return cy.origin('https://careers.epam.ua', () => {
    });
  }

  get errorVerify() {
    return cy.on('uncaught:exception', (e) => {
      if (e.message.includes('Things went bad')) {
        return false;
      }
    });
  }

  clickUaLanguageOption() {
    this.uaLanguageOption.click();
  }

  get uaLanguageOption() {
    return cy.get(uaLanguageOption);
  }

  clickLanguageButton() {
    this.languageButton.click();
  }

  get languageButton() {
    return cy.get(languageButton);
  }
}

export default HomePage;
