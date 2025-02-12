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
    cy.get(".card")
      .eq(0)
      .then(function (el) {
        productName = el.text();
      });
    cy.get(".card button:last-of-type").eq(0).click();
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

    cy.get(".order-summary button").contains("Excel").click();

    const filePath =
      Cypress.config("fileServerFolder") +
      "/cypress/downloads/order-invoice_yergazy.nur.xlsx";

    cy.task("excelToJsonConverter", filePath).then(function (result) {
      cy.log(result.data[1].B);
      console.log(result);
      expect(productName).to.include(result.data[1].B);
    });

    // simple way to read any file to find some text
    cy.readFile(filePath).then(function (text) {
      // let cleanText = text.trim().slice(0, -1);
      cy.log(text);      
    });
  });
});
