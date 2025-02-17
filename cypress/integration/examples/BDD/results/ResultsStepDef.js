import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import OlympHomePage from "../../../../support/OlympPageObjects/OlympHomePage";
import OlympSelectCity from "../../../../support/OlympPageObjects/OlympSelectCity";

const homepage = new OlympHomePage();
const selectCity = new OlympSelectCity();

// ExpiredResultsCheck --

Given("I am on Homepage to check expired results", function () {
  homepage.open(this.data.url);
  selectCity.confirmCity();
});
When("I click Results button", function () {
  homepage.CheckResultsExpired();

});
Then("I am on results Page", function () {
  //cy.get("h3").should("contain", this.data.results.ex_title);
});

// -- ExpiredResultsCheck

// ActualresultsCheck --

Given("I am on Homepage to check actual results", function () {
  homepage.open(this.data.url);
  selectCity.confirmCity();
});
When("I click ResultsActual button", function () {
  homepage.CheckResultsActual();
});
Then("I am on results ActualPage", function () {
  //
});

// -- ActualresultsCheck
