/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("API Test", () => {
  it("API Login Test", () => {
    cy.request("POST", "https://mobileback.kdlolymp.kz/v2/auth-patient/main", {
      login: "701 8873400",
      password: "Abcd123*",
    }).then(function (response) {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("status", "success");
    });
  });
});
