const selectTheReasonForYourInquiry = '#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor > div.layout-box > div > div > div > div > div:nth-child(1) > div.dropdown-list-ui > div';
const mailSubjectsDropdownOption = '#select2-_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_mail_subjects-results > div.os-padding';
const howDidYouHearAboutEPAM = '#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor > div.layout-box > div > div > div > div > div:nth-child(8) > div.dropdown-list-ui > div > span.select2.select2-container.select2-container--default.form-component__field > span.selection > span > span.select2-selection__rendered';
const commentDropdownOption = '#select2-_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment_how_hear_about-results > div.os-padding';
const locationSubjectDropdown = '#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor > div.layout-box > div > div > div > div > div.location-fields > div > div.country-field-ui.location-fields__column > div > span.select2.select2-container.select2-container--default.form-component__field > span.selection';
const countryDropdownOption = '#select2-_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_country-results > div.os-padding';
const firstNameInput = '#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_first_name';
const lastNameInput = '#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_last_name';
const emailInput = '#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_email';
const phoneInput = '#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_phone';
const policiSubmit = '#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor > div.layout-box > div > div > div > div > div:nth-child(9) > div > div.checkbox__holder > label > p > span';
const finalSubmit = '#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor > div.end > div > div.button-ui-wrapper.button-submit > button';
const successMessage = '#main > div.content-container.parsys > div:nth-child(2) > section > div.section__wrapper.section--padding-no > div.form-constructor.start > div > div:nth-child(1) > div > div > p.form-component__big-message > span';


///Check forms fields validation on Contacts page
class ContactsPage {
  open() {
    cy.visit('https://www.epam.com/about/who-we-are/contact');
  }
  ifCapcha() {
    return cy.get('#rc-imageselect');
  }

  ifSuccessMessage() {
    return cy.get(successMessage, { timeout: 30000 })
      .should('contain', 'Thank you for contacting us.');
  }

  clickFinalSubmit() {
    this.finalSubmit.click();
  }

  get finalSubmit() {
    return cy.get(finalSubmit);
  }

  clickPoliciSubmit() {
    this.policiSubmit.click();
  }

  get policiSubmit() {
    return cy.get(policiSubmit);
  }

  get phoneInput() {
    return cy.get(phoneInput);
  }

  get mailInput() {
    return cy.get(emailInput);
  }

  get lastNameInput() {
    return cy.get(lastNameInput);
  }

  get firstNameInput() {
    return cy.get(firstNameInput);
  }

  clickCountryDropdownOption() {
    this.countryDropdownOption.click();
  }

  get countryDropdownOption() {
    return cy.get(countryDropdownOption)
      .contains('Ukraine');
  }

  clickLocationSubjectDropdown() {
    this.locationSubjectDropdown.click();
  }

  get locationSubjectDropdown() {
    return cy.get(locationSubjectDropdown);
  }

  clickCommentDropdownOption() {
    this.commentDropdownOption.click();
  }

  get commentDropdownOption() {
    return cy.get(commentDropdownOption)
      .contains('Client Reference');
  }

  clickHowDidYouHearAbou() {
    this.howDidYouHearAbou.click();
  }

  get howDidYouHearAbou() {
    return cy.get(howDidYouHearAboutEPAM);
  }

  clickMailSubjectsDropdownO() {
    this.mailSubjectsDropdownO.click();
  }

  get mailSubjectsDropdownO() {
    return cy.get(mailSubjectsDropdownOption)
      .contains('Website Feedback');
  }

  clickSelectTheReasonForYourInquiry() {
    this.selectTheReasonForYourInquiry.click();
  }

  get selectTheReasonForYourInquiry() {
    return cy.get(selectTheReasonForYourInquiry);
  }
}

export default ContactsPage;
