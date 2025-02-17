Feature: User Profile Tests

@UserAgreementModal
#@focus
Scenario: Open Login Page And Check User Agreement Modal
    Given I am on Login page to check agreement modal
    When I click agreemrnt link   
    Then User agreement modal open

@PatientLoginPhone
Scenario: Open Homepage and Check Patient Phone Login
    Given I am on Homepage to check patient phone login
    When I click sign in button to phone login   
    Then I am on phone login page

@PatientLoginEmail
Scenario: Open Homepage and Check Patient Email Login
    Given I am on Homepage to check patient email login
    When I click sign in button to email login   
    Then I am on email login page

