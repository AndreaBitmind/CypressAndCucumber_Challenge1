/// <reference types="Cypress" />
import { When, Then }from "@badeball/cypress-cucumber-preprocessor";

When("I type a first name", () => {
    cy.get('[name="first_name"]').type("Andrea")
})

When(`I type a last name`, () => {
    cy.get('[name="last_name"]').type("Martinez")
})

When(`I enter an email address`, () => {
    cy.get('[name="email"]').type("andrea.ajshfd@gmail.com")
})

When(`I type a comment`, () => {
    cy.get('textarea[name="message"]').type("Hello world")

})

When(`I click on the submit button`, () => {
    cy.get('[type="submit"]').click()
})

Then(`I Should be presented with a successful contact us submission message`, () => {
    cy.get('h1').should('have.text', 'Thank You for your Message!')
})

Then(`I Should be presented with an error contact us submission message`, () => {
    cy.get('body').contains("Error: Invalid email address")
})

When (`I type firstName {word}`, (name)=> {
    cy.get('[name="first_name"]').type(name)
})

When (`I type lastName {string}`, (lastName) => {
    cy.get('[name="last_name"]').type(lastName)
})

When (`I enter an email address: {string}`, (mail) => {
    cy.get('[name="email"]').type(mail)
})

When(`I type a comment: {string} and a number {int}`, (comment, number) => {
    cy.get('textarea[name="message"]').type(comment + " " + number)

})