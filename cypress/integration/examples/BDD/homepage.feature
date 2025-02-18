Feature: Homepage Test
#header
@OpenHomepage
Scenario: Open Homepage And Assert Title
    Given I am Homepage
    When I open Homepage
    Then Response code is 200 and Main Title is correct

@LogoCheck
Scenario: Open Homepage And Assert Logo
    Given I am Homepage to check logo
    When I open Homepage to check logo
    Then Homepage open and logo is correct

@NavigationCheck
Scenario: Open Homepage And Check Nav Links
    Given I am on Homepage to check navigation links
    When I check navigation link attributes
    Then Navigation link text is correct

@InfoBlockCheck
Scenario: Open Homepage And Check Info Block
    Given I am on homepage to check info block
    When I check header info block
    Then All elements are visible

@SwitchCity
Scenario: Open Homepage And Switch City
    Given I am on homepage to switch City
    When I click city name and select new one
    Then New city has been selected

@SearchCity
Scenario: Open Homepage And Search City
    Given I am on homepage to search City
    When I get input and type city
    Then New search city has been selected

@SwitchLanguage
Scenario: Open Homepage and Switch Language
    Given I am on Homepage to check language switch    
    When I click an option interface language changes
    Then Page title displayed in selected language

@EmptyCartCheck
Scenario: Open Homepage and Check Empty Cart
    Given I am on Homepage to check empty Cart
    When I click on cart icon
    Then Cart is empty and button is displayed
#header

#body

@AnalysisSearchLong
Scenario: Open Homepage and Search Long Text Analysis
    Given Test search input to type long text
    When I type long text and select one option
    Then Long text test page is open

@AnalysisSearchShort
#@focus
Scenario: Open Homepage and Search Short Text Analysis
    Given Test search input to type short text
    When I type short text and select first option
    Then Short text test page is open

@SearchHistory
#@focus
Scenario: Delete search history from list
    Given Search input and list of items
    When I delete one item from list
    Then Substract one item from the list

@SearchHistoryExtended
#@focus
Scenario: Delete one item from search history
    Given Five items in the search history
    When I search first item   
    Then Four items left in the list

@CheckCarousel
#@focus
Scenario: Check main carousel images visibility
    Given I get carousel items
    When I click an item
    Then An item image is visible and an offer page opens


#@CheckActualServices
@focus
Scenario: Check actual services
    Given I find actual services blocks
    When I click each service item
    Then Sevice page opens





#body
