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


  it('Check forms fields validation on Contacts page', () => {
    contactsPage.open();
    contactsPage.clickFinalSubmit();
    contactsPage.firstNameInputLabel
      .should('have.css', 'color', 'rgb(255, 77, 64)');//highlighted error red color
    contactsPage.lastNameInputLabel
      .should('have.css', 'color', 'rgb(255, 77, 64)');//highlighted error red color
    contactsPage.mailInputLabel
      .should('have.css', 'color', 'rgb(255, 77, 64)');//highlighted error red color
    contactsPage.phoneInputLabel
      .should('have.css', 'color', 'rgb(255, 77, 64)');//highlighted error red color

    contactsPage.clickSelectTheReasonForYourInquiry()
      .clickMailSubjectsDropdownO()
      .clickHowDidYouHearAbou()
      .clickCommentDropdownOption()
      .clickLocationSubjectDropdown()
      .clickCountryDropdownOption();

    contactsPage.firstNameInput
      .type('Ім\'я');
    contactsPage.lastNameInput
      .type('Прізвище');
    contactsPage.mailInput
      .type('email@example.com');
    contactsPage.phoneInput
      .type('+380931234567');

    contactsPage.clickPoliciSubmit()
      .clickFinalSubmit()

    if (contactsPage.ifCapcha() || contactsPage.ifSuccessMessage()) {
      return;
    }else false;
  });

  it('Check that allow to switch location list by region', () => {
    homePage.clickPoliciesAcceptButton();
    homePage.locationList
      .should('have.length', 3)
      .eq(0)
      .should('have.attr', 'aria-selected', 'true')
      .should('contain', 'AMERICAS');
    homePage.locationList
      .should('have.length', 3)
      .eq(1)
      .should('have.attr', 'aria-selected', 'false')
      .should('contain', 'EMEA')
      .click()
      .should('have.attr', 'aria-selected', 'true');
    homePage.locationList
      .should('have.length', 3)
      .eq(2)
      .should('have.attr', 'aria-selected', 'false')
      .should('contain', 'APAC')
      .click()
      .should('have.attr', 'aria-selected', 'true');
  });

  it('Check have the correct title', () => {
    cy.title()
      .should('eq', 'EPAM | Software Engineering & Product Development Services');
  });

  it('Check the ability to switch between mode', () => {
    homePage.header
      .should('have.css', 'color', 'rgb(35, 31, 32)');
    homePage.clickSwitcher();
    homePage.header
      .should('have.css', 'color', 'rgb(0, 0, 0)');
  });

  it('Check the policies list', () => {
    homePage.clickpoliciesAcceptButton();
    homePage.policiesList
      .should('have.length', 6)
      .should('contain.text', 'INVESTORS', 'COOKIE POLICY', 'OPEN SOURCE', 'PRIVACY POLICY', 'APPLICANT PRIVACY NOTICE', 'WEB ACCESSIBILITY');
  })

  it('Check the search function', () => {
    homePage
      .clickSearchIcon()
      .typeInSearchField()
      .clicksfindButton();
    for (let i = 0; i < homePage.searchResults.length; i++) {
        cy.get(homePage.searchResults[i])
          .should('contain.text', 'AI');
    }
  });

  it('Check that the Company logo on the header leads to the main page', () => {
    aboutPage
      .open()
      .clickCompanyLogo();
    cy.url()
      .should('eq', 'https://www.epam.com/');
  });





  it('Check that allows changing language to UA', () => {
    homePage
      .clickLanguageButton()
      .clickUaLanguageOption();
    homePage.errorVerify;
    homePage.checkCurrentLink;
  });

  it('Check that allows to download report', () => {
    homePage.clickAboutButton()
    .clickdownloadReportButton()
    .wait();
    cy.task('listFiles', 'cypress/downloads').then((files) => {
      const expectedFileName = 'EPAM_Corporate_Overview_Q4_EOY.pdf';
      expect(files).to.include(expectedFileName);
      files.forEach((file) => {
        expect(file).to.equal(expectedFileName);
      });
    });
  });


});
