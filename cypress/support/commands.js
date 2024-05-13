// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@cypress/xpath';
import * as cartLocators from '../locators/cartLocators.json'
import * as chechoutProcessLocators from '../locators/checkoutProcesslocators.json'

Cypress.Commands.add('selectDropdownOption', (selector, optionText, value) => {
    cy.get(selector).select(optionText).scrollIntoView().should('have.value', value);
});

Cypress.Commands.add('visibleAndclick', (selector) => {
    cy.get(selector).scrollIntoView().should("be.visible").click();
})

Cypress.Commands.add('visible', (selector) => {
    cy.get(selector).scrollIntoView().should("be.visible");
})

Cypress.Commands.add('typeValue', (selector, value) => {
    cy.get(selector).scrollIntoView().type(value);
})

Cypress.Commands.add('selectDropdownIndex', (selector, index) => {
    cy.get(selector).eq(index).scrollIntoView().should("be.visible").click();
})

Cypress.Commands.add('Checked', (selector) => {
    cy.get(selector).check().should('be.checked');
})

Cypress.Commands.add('addToGiftCart', (value, recipientName, recipientEmail, yourName, yourEmail, message, num) => {
    let path = '//h2[normalize-space()="'+value+'"]/following-sibling::div//div/input';
    cy.xpath(path).scrollIntoView().should("be.visible").click();

    let ele = cy.get(cartLocators.currentItem);
    ele.then((e)=>{
        expect(e.text()).to.contain(value);
    });

    cy.get(cartLocators.recipientName).type(recipientName);
    cy.get(cartLocators.recipientEmail).type(recipientEmail);
    cy.get(cartLocators.yourName).type(yourName);
    cy.get(cartLocators.yourEmail).type(yourEmail);
    cy.get(cartLocators.message).type(message);

    cy.get(cartLocators.qty).should("be.visible").clear().type(num);

    cy.get(cartLocators.addtocartButton).should("be.enabled").click()

    let text = cy.get(cartLocators.validNotification);
    text.then((t) => {
        expect(t.text()).to.contain('The product has been added to your ');
    })
});

Cypress.Commands.add('addMultiItemToCart', (value, num) => {
    let path = '//h2[normalize-space()="'+value+'"]/following-sibling::div//div/input';
    cy.xpath(path).scrollIntoView().should("be.visible").click();

    cy.get(cartLocators.qty).should("be.visible").clear().type(num);

    cy.get(cartLocators.addtoCartButton2).should("be.enabled").click()

    let text = cy.get(cartLocators.validNotification);
    text.then((t) => {
        expect(t.text()).to.contain('The product has been added to your ');
    })
    cy.get(cartLocators.similarProduct).eq(1).should("be.visible").click();

    cy.get(cartLocators.qty).should("be.visible").clear().type(num);

    cy.get(cartLocators.addtoCartButton2).should("be.enabled").click()

    let text2 = cy.get(cartLocators.validNotification).scrollIntoView();
    text2.then((t) => {
        expect(t.text()).to.contain('The product has been added to your ');
    })
})

Cypress.Commands.add("addToCart", () => {
    cy.get(cartLocators.addtoCartButton2).should("be.enabled").click()

    let text = cy.get(cartLocators.validNotification);
    text.then((t) => {
        expect(t.text()).to.contain('The product has been added to your ');
    })
})

Cypress.Commands.add("addAddress", (optionText, optionText2) => {
    cy.get(chechoutProcessLocators.countryDropDown).select(optionText).scrollIntoView().should('have.value', 41);
    cy.get(chechoutProcessLocators.stateprovinceDropdown).select(optionText2).scrollIntoView().should('have.value', 0);
    cy.Checked(chechoutProcessLocators.termsService);
    cy.get(chechoutProcessLocators.checkoutButton).click();
})