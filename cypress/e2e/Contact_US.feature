Feature: WebdriverUniversity - Contact Us Page

    Scenario: Valid Contact Us Form Submission

        Given I navegate to the webdriveruniversity homepage
        When I click on the contact us button
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I Should be presented with a successful contact us submission message


    Scenario: Valid Contact Us Form Submission - with cucumber expressions

        Given I navegate to the webdriveruniversity homepage
        When I click on the contact us button
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I Should be presented with an error contact us submission message


    Scenario: Invalid Contact Us Form Submission: email address empty

        Given I navegate to the webdriveruniversity homepage
        When I click on the contact us button
        And I type firstName Andrea
        And I type lastName "Martinez Ortega"
        And I enter an email address: "andreamartinez@gmail.com"
        And I type a comment: "holicaracoli" and a number 126548
        And I click on the submit button
        Then I Should be presented with a successful contact us submission message