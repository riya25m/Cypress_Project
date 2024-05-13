import {Configutils} from "../utils/configutils"
import {HomePage} from "../pages/homePage"
import { CartPage } from "../pages/cartPage";

let configUtils = new Configutils();
let homePage = new HomePage();
let cartPage = new CartPage();

describe('Adding items to the cart', () => {
    beforeEach(() => {
        cy.visit(configUtils.geturl());
        cy.url().should("include", "tricentis.com");
        homePage.validateHomePage();
    })

    it("Validate Add Gift Card to Cart", () => {
        try {
        cartPage.validateProductsOnHomePage();
        cartPage.addGiftCardInCart('$25 Virtual Gift Card', '3');
        } catch (error) {
            cy.log(`Error occurred: ${error}`);
        }
    });

    it("Validate adding multiple item to cart", () => {
        try {
            cartPage.validateProductsOnHomePage();
            cartPage.addMultiItemToCart('Build your own cheap computer', 2);
        } catch (error) {
            cy.log(`Error occurred: ${error}`);
        }
    })

});