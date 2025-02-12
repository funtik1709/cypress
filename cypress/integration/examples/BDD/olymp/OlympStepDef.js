import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import OlympHomePage from "../../../../support/OlympPageObjects/OlympHomePage";
import OlympSelectCity from "../../../../support/OlympPageObjects/OlympSelectCity";

const homepage = new OlympHomePage();
const selectCity = new OlympSelectCity();

// Confirm City --
Given("I am on Homepage to confirm city", function () {
  homepage.open(this.data.url);
  cy.log(this.data.url);
});
When("I confirm current city", function () {
  selectCity.confirmCity();
});
Then("Homepage loaded and Title is correct", function () {
  selectCity.assertTitle(this.data.title.ru);
});
// -- Confirm City

// Select Main City --
Given("I am on Homepage to select main city", function () {
  homepage.open(this.data.url);
  cy.log(this.data.url);
});
When("I reject current city", function () {
  selectCity.rejectCity();
});
When("Select main city", function () {
  selectCity.selectMainCity(this.data.main_city);
});
Then("Homepage loaded and main city displayed", function () {
  selectCity.assertTitle(this.data.title.ru);
  cy.get(".current-city").should("contain", this.data.main_city);
});
// -- Select Main City

// Search Main City --
Given("I am on Home Page To Search City", function () {
  homepage.open(this.data.url);
});

When("I reject current city to search city", function () {
  selectCity.rejectCity();
});

When("I fill out the input field and search city", function () {
  selectCity.searchCity(this.data.main_city);
});

Then("Home page loaded and city selected", function () {
  selectCity.assertTitle(this.data.title.ru);
});
// -- Search Main City

// SearchRegionCity -- 

Given('I am on Homepage to search region city', function() {
  homepage.open(this.data.url);
});

When('I reject current city to search region city', function() {
  selectCity.rejectCity();
});

When('I enter region name and select city', function() {
  selectCity.searchRegion(this.data.region_city);
});

Then('Home page loaded and region city displayed', function() {
  selectCity.assertTitle(this.data.title.ru);
});
// -- SearchRegionCity

// SelectRegion --

Given('I am on Homepage to select region', function() {
  homepage.open(this.data.url);
});

When('I reject current city to select region', function() {
  selectCity.rejectCity();
});

When('I select region and choose city', function() {
  selectCity.selectRegionAndCity1(this.data.area.region, this.data.area.city);
});

Then('Home page loaded, region city displayed', function() {
  selectCity.assertTitle(this.data.title.ru);
});

// -- SelectRegion

// npx cypress run --spec cypress\integration\examples\BDD\olymp.feature --browser chrome
// node cypress/cucumber-html-report.js
