const companyLogo = '#wrapper > div.header-container.iparsys.parsys > div.iparys_inherited > div > div > header > div > div > a.header__logo-container.desktop-logo';
const downloadReportButton = '.colctrl__holder > .button > .button__wrapper > .button-ui-23 > .button__inner';


class AboutPage {

  open() {
    cy.visit('https://www.epam.com/about');
  }

///Check that the Company logo on the header leads to the main page

  clickCompanyLogo() {
    cy.get(companyLogo).click({ force: true });
  }

  get  url() {
    return cy.url();
  }

///Check that allows to download report
  wait() {
    cy.wait(5000);
  }

  clickdownloadReportButton() {
    this.downloadReportButton.click();
  }

  get downloadReportButton() {
    return cy.get(downloadReportButton);
  }
}

export default AboutPage;


