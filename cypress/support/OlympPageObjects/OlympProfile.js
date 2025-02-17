Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

class OlympProfile {
  ProfileTitleAssert() {
    cy.get(".title").should("contain", "Здравствуйте");
  }
  ActiveButton() {
    cy.get("#Results").should("have.class", "active");
  }

  UserAgreementModal(ag_title) {
    cy.get(".sign_in").click();
    cy.get(".terms").click();
    cy.get(".agreement .title").should(($title) => {
      expect($title.text()).to.equal(ag_title);
    });

    cy.get('.button').contains('Принять условия').click();
    cy.get('.checkbox__field').should('have.attr', 'checked')
  }

  PatientLoginPhone(phone, password) {
    cy.get(".sign_in").click();
    cy.get(".button").eq(0).should("have.class", "active");
    cy.get(".input__dropdown .title").should("contain", "Телефон");

    cy.get("#login_input").type(phone);
    cy.get("#password_input").type(password);
    cy.get(".checkbox__indicator").click();
    cy.get(".send").click();
  }

  PatientLoginEmail(email, password) {
    cy.get(".sign_in").click();
    cy.get(".input__dropdown").click();
    cy.get(".title").contains("E-mail").click();

    cy.get("#login_input").type(email);
    cy.get("#password_input").type(password);
    cy.get(".checkbox__indicator").click();
    cy.get(".send").click();
  }

  ButtonsAndTabs(discount, email, lastname) {
    cy.get("#Preorders").click();
    cy.get(".left .title").should("contain", "Последние результаты");

    cy.get("#Discount").click();
    cy.get(".left .title").should("contain", "Ваша дисконтная карта:");
    cy.get(".left .subtitle").should(($discount) => {
      expect($discount.text()).to.equal(discount);
    });

    cy.get("#Options").click();

    cy.get("#surname_input")
      .invoke("val")
      .then((surname) => {
        let actualText = surname.toLowerCase();
        let expectedText = "маликов";
        cy.log(actualText);
        expect(actualText).to.equal(expectedText);
      });

    cy.get("#surname_input").should("have.value", "Маликов");
    cy.get("#name_input").should("have.value", "ЯРОСЛАВ");
    cy.get("#patronymic_input").should("have.value", "Тестович");
    cy.get("#iin_input").should("have.value", "001128550028");
    // phoneNumber_input should('include.text', 'I am an example')
    cy.get("#phoneNumber_input").should("have.value", "+7 (776) 996-1197");
    //email_input malikov.mp4@mail.ru
    cy.get("#email_input").should("have.value", email);

    cy.get(".checkbox__field").eq(0).should("be.checked");
    cy.get(".checkbox__field").eq(1).should("be.checked");
  }
}

export default OlympProfile;
