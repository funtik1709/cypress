import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import OlympHomePage from "../../../../support/OlympPageObjects/OlympHomePage";
import OlympSelectCity from "../../../../support/OlympPageObjects/OlympSelectCity";

const homepage = new OlympHomePage();
const selectCity = new OlympSelectCity();

Given("I am on Home Page", function() {
  homepage.open(this.data.url);
  cy.log(this.data.url);
});

When("I confirm current city", function () {
  selectCity.confirmCity();
});

Then("Home Page loaded and Title is asserted", function () {
  selectCity.assertTitle(this.data.title.ru);
});

// npx cypress run --spec cypress\integration\examples\BDD\olymp.feature --browser chrome
// node cypress/cucumber-html-report.js