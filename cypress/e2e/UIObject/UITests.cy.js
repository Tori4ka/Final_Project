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
      .should('have.length.greaterThan', 0); //todo: знаходить 149 айтемів, невірний локатор, спробуй "div.js-tabs-links-list a"
    homePage.regionTab(1) //todo: непотрібні локатори на різні айтеми. Ти перевіряєш, що locationList містить 3 елементи, і що перший з нього містить слово Америка, і він вибраний,
      .should('exist'); // todo: тобто його aria-selected = true (або клас active). Другий містить слово EMEA і його aria-selected = false
    homePage.regionTab(2)//todo: Потім натискаєш на другий елемент і перевіряєш що він вже актів, на третій - те ж саме. Країни всередині перевіряти неварто, там складно
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
    homePage.clickSwitcher(); //todo: Я б спочатку первірила поточний колір, потім переключила і перевірила, що він інший. Так ти скоротиш тест і зайвий степ
    homePage.header
      .should('have.css', 'color', 'rgb(0, 0, 0)');
    homePage.clickSwitcher();
    homePage.header
      .should('have.css', 'color', 'rgb(35, 31, 32)');
  });

  it('Check the policies list', () => {
    homePage.clickpoliciesAcceptButton();
    homePage.policiesList //todo: невірний локатор, бо знаходить 2 елементи. Якщо тобі локатор "policiesList" без пошуку у ньому li не потрібен, то цей файнд варто засунути в сам локатор,
      .find('li') //todo: щоб було просто - policiesList.should('have.length', 6);
      .should('have.length', 6);
    homePage.investors //todo: непотрібно шукати локатор кожного елемента, достатньо перевірки, що той список має довжину 6 і містить в собі цих 6 назв (стрінгів)
      .contains('INVESTORS'); //todo: для перевірки контейнз не варто використовувати, краще should("contain.text", "...")
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
    homePage.clickSearchIcon(); // todo: дивний локатор - спробуй span.search-icon, і додай в кінці методу return this, тоді не треба створювати новий інстанс, а можна юзати чейн
    homePage.searchInput
      .type('AI'); // todo: тут варто створити метод типу typeInSearchField()
    homePage.clicksSearchButton();// todo: назва кнопки має бути як в юайці - findButton, додай return this
    homePage.searchResults //todo: це локатор каунтера, а не самих результатів, там має бути список
      .should('exist')
      .invoke('text')
      .should('match', /\d+ results for "AI"/);
//todo: ти по суті перевірила одну стрічку, а не те, які результати воно показало. Тут варто взяти список результатів і перевірити циклом, що кожен містить "АІ"
  });

  it('Check that the Company logo on the header leads to the main page', () => {
    aboutPage.open(); //todo: додай ретурн і використовуй чейн
    aboutPage.clickCompanyLogo(); //todo: дуже складний локатор, спрости
    aboutPage.url // todo: тут дивно виглядає, бо заходиш з ебаутПейдж і перевіряєш, що її урла - це ХоумПейдж. Краще використовувати cy.url()
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
    homePage.clickLanguageButton(); //todo: занадто складний локатор, спробуй простіше , додай ретурн
    homePage.clickUaLanguageOption(); //todo: некоректний локатор, якщо зміниться позиція, то вибереться не та мова. Краще взяти список мов і натиснути на ту, яка містить "Україна"
    homePage.errorVerify;
    homePage.checkCurrentLink;
  });
  
  it('Check that allows to download report', () => {//todo:тест фейлиться
    // homePage.clickAboutButton()
    aboutPage.open(); //todo: ти вдруге використовуєш вхід на цю сторінку. Краще зробити клік на About на хоум пейджі,і в ретурн додати повернення new AboutPage() для чейна
    aboutPage.clickdownloadReportButton(); //todo: заважкий локатор, спробуй div.colctrl__holder a
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
