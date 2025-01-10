/// <reference types="cypress" />

import OlympHomePage from "../../support/OlympPageObjects/OlympHomePage";
import OlympSelectCity from "../../support/OlympPageObjects/OlympSelectCity";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

// npx cypress run
// npx cypress run --headed
// npx cypress run --browser chrome(firefox, edge)
// test url - https://wewe:wewe@kdlolympsite.ddirection.kz/

describe("Smoke Test - Pages", () => {
  beforeEach(function () {
    cy.fixture("data").then(function (data) {
      this.data = data;
      this.homepage = new OlympHomePage();
      this.selectCity = new OlympSelectCity();

      this.homepage.open(this.data.url);
      this.selectCity.confirmCity();

      // turn off logging for fetch and xhr
      cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    });
  });

  it("Open Promotions Page", function () {
    cy.get("a").contains(this.data.links[0].prom).click();
    cy.get('h2[class="title"]').should("contain", this.data.links[0].prom);
  });

  it("Open Analysis Page", function () {
    cy.get("a").contains(this.data.links[1].analysis).click();
    cy.get('h2[class="title"]').should("contain", this.data.links[1].analysis);
  });

  it("Open Locations Page", function () {
    cy.get("a").contains(this.data.links[2].location).click();
    cy.get('h2[class="title"]').should("contain", this.data.links[2].location);
  });

  it("Open House Call Page", function () {
    cy.get("a").contains(this.data.links[3].call).click();
    cy.get('h2[class="title"]').should("contain", this.data.links[3].call);
  });

  it("Open About Page", function () {
    cy.get("a").contains(this.data.links[4].about).click();
    cy.get('h2[class="title"]').should("contain", this.data.links[4].about);
  });

  it("Open Franchise Page", function () {
    cy.get("a").contains(this.data.links[5].franchise).click();
    cy.get('h2[class="title"]').should("contain", this.data.links[5].franchise);
  });

  it('Logo Check', function() {
    this.homepage.logoCheck();
  });  

  afterEach(function () {
    cy.get('a[href="/"]').eq(0).click();
  });
});
