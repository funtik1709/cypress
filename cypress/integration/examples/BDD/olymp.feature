Feature: Homepage Select City Tests

@ConfirmCity
Scenario: Open Homepage And Confirm City
    Given I am on Homepage to confirm city
    When I confirm current city
    Then Homepage loaded and Title is correct

@SelectMainCity
Scenario: Open Homepage And Select Main City
    Given I am on Homepage to select main city
    When I reject current city
    When Select main city
    Then Homepage loaded and main city displayed

@SearchMainCity
Scenario: Open Homepage And Search City
    Given I am on Home Page To Search City
    When I reject current city to search city
    When I fill out the input field and search city
    Then Home page loaded and city selected

@SearchRegionCity
Scenario: Open Homepage And Search Region City
    Given I am on Homepage to search region city
    When I reject current city to search region city
    When I enter region name and select city   
    Then Home page loaded and region city displayed

@SelectRegion
Scenario: Open Homepage And Select Region
    Given I am on Homepage to select region
    When I reject current city to select region
    When I select region and choose city   
    Then Home page loaded, region city displayed