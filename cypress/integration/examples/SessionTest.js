/// <reference types="cypress" />

const neatCSV = require("neat-csv");

let productName;

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("JWT Session", () => {
  it("Login through local storage", async () => {
    cy.LoginAPI().then(function () {
      cy.visit("https://rahulshettyacademy.com/client", {
        onBeforeLoad: function (window) {
          window.localStorage.setItem("token", Cypress.env("token"));
        },
      });
    });
    cy.get(".card b")
      .eq(1)
      .then(function (el) {
        productName = el.text();
      });
    cy.get(".card button:last-of-type").eq(1).click();
    cy.get("[routerlink*='cart']").click();
    cy.contains("Checkout").click();

    cy.get("[placeholder*='Select Country']").type("India");

    // loop each element and get one by matching text
    cy.get(".ta-results button").each(($el, index, $list) => {
      if ($el.text() === " India") {
        cy.wrap($el).click();
      }
    });

    cy.get(".action__submit").click();
    cy.wait(2000);

    cy.get(".order-summary button").eq(0).click();

    Cypress.config("fileServerFolder");

    cy.readFile(
      Cypress.config("fileServerFolder") +
        "/cypress/downloads/order-invoice_yergazy.nur.csv"
    ).then(async (text) => {
      const csv = await neatCSV(text);
      console.log(csv);

      const actualProductCSV = csv[0]["Product Name"];

      // assertion
      expect(productName).to.equal(actualProductCSV);
    });
  });
});
