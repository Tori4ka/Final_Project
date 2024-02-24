
class AboutPage {

  open() {
    cy.visit('https://www.epam.com/about');
    return this;
  }

///Check that the Company logo on the header leads to the main page

  clickCompanyLogo() {
    cy.get('.desktop-logo > img.header__logo.header__logo-light').click({ force: true });
  }

///Check that allows to download report
  wait() {
    cy.wait(3000);
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


