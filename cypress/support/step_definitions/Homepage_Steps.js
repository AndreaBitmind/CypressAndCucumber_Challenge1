/// <reference types="Cypress" />
import { Given, When }from "@badeball/cypress-cucumber-preprocessor";

const url = "https://www.webdriveruniversity.com/"

Given(`I navegate to the webdriveruniversity homepage`, () => {
cy.visit(url)
})

When(`I click on the contact us button`, () => {
    cy.get("#contact-us").invoke("removeAttr", "target"). click()
})