import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import OlympHomePage from "../../../../support/OlympPageObjects/OlympHomePage";
import OlympSelectCity from "../../../../support/OlympPageObjects/OlympSelectCity";

const homepage = new OlympHomePage();
const selectCity = new OlympSelectCity();

// OpenHomepage --
Given("I am Homepage", function () {
  homepage.open(this.data.url);
  cy.log(this.data.url);
});
When("I open Homepage", function () {
  selectCity.confirmCity();
});
Then("Response code is 200 and Main Title is correct", function () {
  selectCity.assertTitle(this.data.title.ru);
});
// -- OpenHomepage

// LogoCheck --

Given("I am Homepage to check logo", function () {
  homepage.open(this.data.url);
  cy.log(this.data.url);
  selectCity.confirmCity();
});
When("I open Homepage to check logo", function () {
  homepage.logoCheck();
  homepage.isoCheck();
});
Then("Homepage open and logo is correct", function () {
  selectCity.assertTitle(this.data.title.ru);
});

// -- LogoCheck

// NavigationCheck --

Given("I am on Homepage to check navigation links", function () {
  homepage.open(this.data.url);
  cy.log(this.data.url);
  selectCity.confirmCity();
});
When("I check navigation link attributes", function () {
  const currentCity = cy
    .get(".current-city span")
    .eq(0)
    .then(function ($elem) {
      cy.log($elem.text());
    });

  const pages = [
    "/promotions",
    "/pricelist/astana",
    "/cabinets",
    "/house-call",
    "/about",
    "/franchise",
  ];
  pages.forEach((page) => {
    cy.get(`a[href="${page}"]`).eq(0).click();
    cy.location("pathname").should("eq", `${page}`);
    cy.go("back");
  });
});
Then("Navigation link text is correct", function () {
  selectCity.assertTitle(this.data.title.ru);
});

// -- NavigationCheck

// InfoBlockCheck --

Given("I am on homepage to check info block", function () {
  homepage.open(this.data.url);
  selectCity.confirmCity();
});
When("I check header info block", function () {
  homepage.TelegramAndPhone();
});
Then("All elements are visible", function () {});

// -- @InfoBlockCheck

// @SwitchCity --

Given("I am on homepage to switch City", function () {
  homepage.open(this.data.url);
  selectCity.confirmCity();
});
When("I click city name and select new one", function () {
  homepage.SwitchCity(this.data.area.region, this.data.area.city);
});
Then("New city has been selected", function () {
  homepage.AssertNewCity(this.data.area.city);
});

// -- @SwitchCity

// @SearchCity --
Given("I am on homepage to search City", function () {
  homepage.open(this.data.url);
  selectCity.confirmCity();
});
When("I get input and type city", function () {
  homepage.SearchCity(this.data.area.search_city);
});
Then("New search city has been selected", function () {
  homepage.AssertNewCity(this.data.area.search_city);
});
// -- @SearchCity

// SwitchLanguage --
Given("I am on Homepage to check language switch", function () {
  homepage.open(this.data.url);
  selectCity.confirmCity();
});
When("I click an option interface language changes", function () {
  cy.get(".select .select__preview").should("contain", "ru");
  cy.get(".select").eq(0).click();
  cy.get(".select__list__elem").contains("kz").click();
  cy.get('h1[class="title"]').should("contain", this.data.title.kz);

  cy.get(".select").eq(0).click();
  cy.get(".select__list__elem").contains("en").click();
  cy.get('h1[class="title"]').should("contain", this.data.title.en);

  cy.get(".select").eq(0).click();
  cy.get(".select__list__elem").contains("ru").click();
});
Then("Page title displayed in selected language", function () {
  selectCity.assertTitle(this.data.title.ru);
});
// -- SwitchLanguage

// EmptyCartCheck --

Given("I am on Homepage to check empty Cart", function () {
  homepage.open(this.data.url);
  selectCity.confirmCity();
});
When("I click on cart icon", function () {
  homepage.emptyCartCheck();
});
Then("Cart is empty and button is displayed", function () {
  selectCity.assertTitle(this.data.title.ru);
});

// -- EmptyCartCheck

/////////////////////// body

// @AnalysisSearchLong --

Given("Test search input to type long text", function () {
  homepage.open(this.data.url);
  selectCity.confirmCity();
});
When("I type long text and select one option", function () {
  homepage.SearchAnalysisLong("Мужской гормональный фон");
});
Then("Long text test page is open", function () {
  cy.get("h1").should("contain", "Мужской гормональный фон");
});

// -- @AnalysisSearchLong

// @AnalysisSearchShort --

Given("Test search input to type short text", function () {
  homepage.open(this.data.url);
  selectCity.confirmCity();
});
When("I type short text and select first option", function () {
  homepage.SearchAnalysisShort("Mg");
});
Then("Short text test page is open", function () {});

// -- @AnalysisSearchShort

// @SearchHistory --

Given("Search input and list of items", function () {
  homepage.open(this.data.url);
  selectCity.confirmCity();
});
When("I delete one item from list", function () {
  homepage.SearchAnalysisButton("Общий анализ крови");
  homepage.DeleteSearchHistoryItem();
});
Then("Substract one item from the list", function () {
  homepage.DeleteSearchHistoryAssertion();
});

// -- @SearchHistory

// @SearchHistoryExtended -- 

// Клинический анализ крови с лейкоцитарной формулой
// Окскарбазепин и его метаболит
// Пакет "Корь. ПЦР+ИФА"
// Фолиевая кислота (фолат)
// 17-ОН Прогестерон (17-ОП)
//homepage.DeleteOneItemFromSearchHistory();



Given("Five items in the search history", function () {
  homepage.open(this.data.url);
  selectCity.confirmCity();
});
When("I search first item", function () {
  homepage.SearchAnalysisButton("Клинический анализ крови с лейкоцитарной формулой");
  homepage.SearchAnalysisButton("Корь. ПЦР+ИФА");
  homepage.SearchAnalysisButton("Фолиевая кислота (фолат)");
  homepage.SearchAnalysisButton("17-ОН Прогестерон (17-ОП)");
  homepage.SearchAnalysisButton("Окскарбазепин и его метаболит");  
});
Then("Four items left in the list", function () {
  homepage.DeleteOneItemFromSearchHistory(5); 
});

// -- @SearchHistoryExtended

// @CheckCarousel -- 

Given("I get carousel items", function () {
  homepage.open(this.data.url);
  selectCity.confirmCity();
});
When("I click an item", function () {
  homepage.CheckCarousel();
});
Then("An item image is visible and an offer page opens", function () {
  
});

// -- @CheckCarousel

/////////////////////// body

// npx cypress run --spec cypress\integration\examples\BDD\homepage.feature --browser chrome
// node cypress/cucumber-html-report.js

/*
Given("", function () {
 
});
When("", function () {
  
});
Then("", function () {
  
});

*/
