///Check forms fields validation on Contacts page
class ContactsPage {
  open() {
    cy.visit('https://www.epam.com/about/who-we-are/contact');
  }
  ifCapcha() {
    this.capcha.click({ force: true });
    return this;
  }

  get capcha(){
    return cy.get('body > div:nth-child(28) > div:nth-child(1)');
  }

  ifSuccessMessage() {
    return cy.get('.form-component__big-message span:contains("Success")', { timeout: 30000 })
      .should('contain', 'Thank you for contacting us.');
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

  get policiSubmit() {
    return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor > div.layout-box > div > div > div > div > div:nth-child(9) > div > div.checkbox__holder > label > p > span');
  }

  get phoneInput() {
    return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_phone');
  }
  get phoneInputLabel() {
    return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor > div.layout-box > div > div > div > div > div:nth-child(3) > div > div:nth-child(2) > div > div > div > label');
  }
  get mailInput() {
    return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_email');
  }

  get mailInputLabel() {
    return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor > div.layout-box > div > div > div > div > div:nth-child(3) > div > div:nth-child(1) > div > div > div > label');
  }

  get lastNameInput() {
    return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_last_name');
  }

  get lastNameInputLabel() {
    return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor > div.layout-box > div > div > div > div > div:nth-child(2) > div > div:nth-child(2) > div > div > div > label');
  }

  get firstNameInput() {
    return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_first_name');
  }
  get firstNameInputLabel() {
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

  get locationSubjectDropdown() {
    return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor > div.layout-box > div > div > div > div > div.location-fields > div > div.country-field-ui.location-fields__column > div > span.select2.select2-container.select2-container--default.form-component__field > span.selection');
  }

  clickCommentDropdownOption() {
    this.commentDropdownOption.click();
    return this;
  }

  get commentDropdownOption() {
    return cy.get('#select2-_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment_how_hear_about-results > div.os-padding')
      .contains('Client Reference');
  }

  clickHowDidYouHearAbou() {
    this.howDidYouHearAbou.click();
    return this;
  }

  get howDidYouHearAbou() {
    return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor > div.layout-box > div > div > div > div > div:nth-child(8) > div.dropdown-list-ui > div > span.select2.select2-container.select2-container--default.form-component__field > span.selection > span > span.select2-selection__rendered');

  }

  clickMailSubjectsDropdownO() {
    this.mailSubjectsDropdownO.click();
    return this;
  }

  get mailSubjectsDropdownO() {
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
