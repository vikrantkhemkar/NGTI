Feature: Scenarios to test the API

  @all 
  Scenario Outline: verify the /all endpoint
    When I launch web application
    And I search for <specie> name
    And I change the transport type to <filter>
    Then I verify the filter result
    When I make request to <filter> endpoint
    Then I verify the record for <filter> has <specie> type

  Examples:
  | specie | filter |
  | kaleesh  | vehicle  |
  | human | starships |
