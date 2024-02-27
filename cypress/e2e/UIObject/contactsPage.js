///Check forms fields validation on Contacts page
class ContactsPage {
  open() {
    cy.visit('https://www.epam.com/about/who-we-are/contact');
  }
  ifCapcha() { //todo: method's name is not correct, it contains clicking, not boolean type
    this.capcha.click({ force: true });
    return this;
  }

  get capcha(){ //TODO: the best practice is to keep all getters on the top of page and all methods after all getters
    return cy.get('body > div:nth-child(28) > div:nth-child(1)'); //todo: it is not good locator
  }

  ifSuccessMessage() { //todo: method's name is not valid
    return cy.get('.form-component__big-message span:contains("Success")', { timeout: 30000 })
      .should('contain', 'Thank you for contacting us.');//todo: you should not keep assertion in pages, but only in tests
  }

  clickFinalSubmit() {
    this.finalSubmit.click();
    return this;
  }

  get finalSubmit() {
    return cy.get('div.button-ui-wrapper.button-submit > button');
  }

  clickPoliciSubmit() {
    this.policiSubmit.click();
    return this;
  }

  get policiSubmit() { //todo: too long locator - you can write just  - cy.get(label[for*='new_form_gdpr'])
    return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor > div.layout-box > div > div > div > div > div:nth-child(9) > div > div.checkbox__holder > label > p > span');
  }

  get phoneInput() { //todo: too long locator
    return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_phone');
  }
  get phoneInputLabel() { //todo: too long locator, I wrote you in Teams - create one getter for all fields get field() {cy.get('.form-component__label')} and use it in test with contains : contactsPage.field.contains("Phone").should(...)
    return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor > div.layout-box > div > div > div > div > div:nth-child(3) > div > div:nth-child(2) > div > div > div > label');
  }
  get mailInput() {//todo: too long locator
    return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_email');
  }

  get mailInputLabel() {//todo: too long locator
    return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor > div.layout-box > div > div > div > div > div:nth-child(3) > div > div:nth-child(1) > div > div > div > label');
  }

  get lastNameInput() {//todo: too long locator
    return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_last_name');
  }

  get lastNameInputLabel() {//todo: too long locator
    return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor > div.layout-box > div > div > div > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div > label');
  }

  get firstNameInput() {//todo: too long locator
    return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_first_name');
  }
  get firstNameInputLabel() {//todo: too long locator
    return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor > div.layout-box > div > div > div > div > div:nth-child(2) > div > div:nth-child(1) > div > div > div > label');
  }
  clickCountryDropdownOption() {
    this.countryDropdownOption.click();
    return this;
  }

  get countryDropdownOption() {
    return cy.get('#select2-_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_country-results > div.os-padding')
      .contains('Ukraine');
  }

  clickLocationSubjectDropdown() {
    this.locationSubjectDropdown.click();
    return this;
  }

  get locationSubjectDropdown() {//todo: too long locator
    return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor > div.layout-box > div > div > div > div > div.location-fields > div > div.country-field-ui.location-fields__column > div > span.select2.select2-container.select2-container--default.form-component__field > span.selection');
  }

  clickCommentDropdownOption() {
    this.commentDropdownOption.click();
    return this;
  }

  get commentDropdownOption() {//todo: too long locator
    return cy.get('#select2-_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment_how_hear_about-results > div.os-padding')
      .contains('Client Reference');
  }

  clickHowDidYouHearAbou() {
    this.howDidYouHearAbou.click();
    return this;
  }

  get howDidYouHearAbou() {//todo: too long locator
    return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor > div.layout-box > div > div > div > div > div:nth-child(8) > div.dropdown-list-ui > div > span.select2.select2-container.select2-container--default.form-component__field > span.selection > span > span.select2-selection__rendered');

  }

  clickMailSubjectsDropdownO() {
    this.mailSubjectsDropdownO.click();
    return this;
  }

  get mailSubjectsDropdownO() {//todo: too long locator
    return cy.get('#select2-_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_mail_subjects-results > div.os-padding')
      .contains('Website Feedback');
  }

  clickSelectTheReasonForYourInquiry() {
    this.selectTheReasonForYourInquiry.click();
    return this;
  }

  get selectTheReasonForYourInquiry() {
    return cy.get('div.dropdown-list-ui:first > div');
  }
}

export default ContactsPage;
