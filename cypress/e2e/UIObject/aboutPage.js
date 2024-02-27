
class AboutPage {

  open() {
    cy.visit('https://www.epam.com/about');
    return this;
  }

///Check that the Company logo on the header leads to the main page

  clickCompanyLogo() {
    cy.get('.desktop-logo > img.header__logo.header__logo-light').click({ force: true }); //TODO: You should put locator inside getter (get companyLogo) and then use this getter inside method of clicking (example -  downloadReportButton)
  }

///Check that allows to download report
  wait() {
    cy.wait(3000); //TODO: don't use such waiter and don't put it inside method!!!
    return this;
  }

  clickdownloadReportButton() {
    this.downloadReportButton.click();
    return this;
  }

  get downloadReportButton() {
    return cy.get('div.colctrl__holder a');
  }
}

export default AboutPage;


