import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import OlympHomePage from "../../../../support/OlympPageObjects/OlympHomePage";
import OlympSelectCity from "../../../../support/OlympPageObjects/OlympSelectCity";
import OlympProfile from "../../../../support/OlympPageObjects/OlympProfile";

const homepage = new OlympHomePage();
const selectCity = new OlympSelectCity();
const profile = new OlympProfile();

// PatientLoginPhone --

Given("I am on Homepage to check patient phone login", function () {
  homepage.open(this.data.url);
  selectCity.confirmCity();
});
When("I click sign in button to phone login", function () {
    profile.PatientLoginPhone(this.data.patient.phone, this.data.patient.password);
});
Then("I am on phone login page", function () {
  profile.ProfileTitleAssert();
  profile.ActiveButton();
});

// -- PatientLoginPhone

// PatientLoginEmail -- 

Given("I am on Homepage to check patient email login", function () {
    homepage.open(this.data.url);
    selectCity.confirmCity();
});
When("I click sign in button to email login", function () {
  profile.PatientLoginEmail(this.data.patient.email, this.data.patient.password);
});
Then("I am on email login page", function () {
    profile.ProfileTitleAssert();
    profile.ActiveButton();
    profile.ButtonsAndTabs(this.data.patient.discount, this.data.patient.email, this.data.patient.lastame);
});

// -- PatientLoginEmail

// UserAgreementModal --

Given("I am on Login page to check agreement modal", function () {
  homepage.open(this.data.url);
  selectCity.confirmCity();
});
When("I click agreemrnt link", function () {
  profile.UserAgreementModal(this.data.userAgreement.title);
});
Then("User agreement modal open", function () {
  
});

// -- UserAgreementModal

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