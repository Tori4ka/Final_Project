import HomePage from './homePage.js';
import ContactsPage from './contactsPage.js';
import AboutPage from './aboutPage.js';


describe('UI Check', () => {
  const homePage = new HomePage();
  const contactsPage = new ContactsPage();
  const aboutPage = new AboutPage();

  beforeEach(() => {
    homePage.open();   
  });
   
  it('Check that allow to switch location list by region', () => {
    homePage.clickPoliciesAcceptButton();
    homePage.locationList
      .find('li')
      .should('have.length.greaterThan', 0);
    homePage.regionTab(1)
      .should('exist');
    homePage.regionTab(2)
      .should('exist');
    homePage.regionTab(3)
      .should('exist');
    homePage.activeLocation
      .should('exist');
    homePage.clicklocationImage();
    homePage.activeCountry
      .should('contain', 'Bogotá');
  });

  it('Check have the correct title', () => {
    cy.title()
      .should('eq', 'EPAM | Software Engineering & Product Development Services');
  });

  it('Check the ability to switch between mode', () => {
    homePage.clickSwitcher();
    homePage.header
      .should('have.css', 'color', 'rgb(0, 0, 0)');
    homePage.clickSwitcher();
    homePage.header
      .should('have.css', 'color', 'rgb(35, 31, 32)');
  });

  it('Check the policies list', () => {
    homePage.clickpoliciesAcceptButton();
    homePage.policiesList
      .find('li')
      .should('have.length', 6);
    homePage.investors
      .contains('INVESTORS');
    homePage.cookiesPolicy
      .contains('COOKIE POLICY');
    homePage.clickpolicyInvestors();
    homePage.openSource
      .contains('OPEN SOURCE');
    homePage.privacyPolicy
      .contains('PRIVACY POLICY');
    homePage.clickcookiesPolicy;
    homePage.applicantPrivacyNotice
      .contains('APPLICANT PRIVACY NOTICE');
    homePage.webAccessibility
      .contains('WEB ACCESSIBILITY');
  })
   
  it('Check the search function', () => {
    homePage.clickSearchIcon();
    homePage.searchInput
      .type('AI');
    homePage.clicksSearchButton();
    homePage.searchResults
      .should('exist')
      .invoke('text')
      .should('match', /\d+ results for "AI"/);

  });

  it('Check that the Company logo on the header leads to the main page', () => {
    aboutPage.open();
    aboutPage.clickCompanyLogo();
    aboutPage.url
      .should('eq', 'https://www.epam.com/');
  });

  it('Check forms fields validation on Contacts page', () => {
    contactsPage.open();
    
    contactsPage.clickSelectTheReasonForYourInquiry();
    contactsPage.clickMailSubjectsDropdownO();

    contactsPage.clickHowDidYouHearAbou();
    contactsPage.clickCommentDropdownOption();
  
    contactsPage.clickLocationSubjectDropdown();
    contactsPage.clickCountryDropdownOption();     

    contactsPage.firstNameInput
      .type('Ім\'я');
    contactsPage.lastNameInput
      .type('Прізвище');
    contactsPage.mailInput
      .type('email@example.com');
    contactsPage.phoneInput
      .type('+380931234567');

    contactsPage.clickPoliciSubmit();

    contactsPage.clickFinalSubmit();
      if(contactsPage.ifSuccessMessage() || contactsPage.ifCapcha()){
        return;
      }
  });  

  it('Check that allows changing language to UA', () => {
    homePage.clickLanguageButton();
    homePage.clickUaLanguageOption();
    homePage.errorVerify;
    homePage.checkCurrentLink;
  });  
  
  it('Check that allows to download report', () => {
    aboutPage.open();
    aboutPage.clickdownloadReportButton();
    aboutPage.wait();
    cy.task('listFiles', 'cypress/downloads').then((files) => {
      const expectedFileName = 'EPAM_Corporate_Overview_Q3_october.pdf';
      expect(files).to.include(expectedFileName);
      files.forEach((file) => {
        expect(file).to.equal(expectedFileName);
      });
    });
  });

});
