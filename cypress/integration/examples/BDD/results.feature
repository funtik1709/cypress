Feature: Check Results

@ExpiredResultsCheck
Scenario: Open Homepage and Check Results(Expired)
    Given I am on Homepage to check expired results
    When I click Results button
    Then I am on results Page

@ActualresultsCheck
#@focus
Scenario: Open Homepage and Check Results(Actual)
    Given I am on Homepage to check actual results
    When I click ResultsActual button
    Then I am on results ActualPage