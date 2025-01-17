Feature: Homepage Test
@ConfirmCity
Scenario: Open Homepage And Confirm City
Given I am on Home Page
When I confirm current city
Then Home Page loaded and Title is asserted 