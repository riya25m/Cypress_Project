import {Configutils} from "../utils/configutils"
import {HomePage} from "../pages/homePage"
import {SearchPage} from "../pages/searchPage"
import {CartPage} from "../pages/cartPage";
import {CheckoutProcess} from "../pages/checkoutProcessPage";

let configUtils = new Configutils();
let homePage = new HomePage();
let searchPage = new SearchPage();
let cartPage = new CartPage();
let checkoutProcess = new CheckoutProcess();

describe('Checkout Process', () => {

    beforeEach(() => {
        cy.visit(configUtils.geturl());
        cy.url().should("include", "tricentis.com");
        homePage.validateHomePage();
        searchPage.enterValueInSearch();
        searchPage.validateDropdownList();
    })

    it('Validate checkout process', () => {
        try{
            searchPage.selectOptionFromDropdownList();
            searchPage.validateDropdownSearchResult();
            cartPage.addToCartItem();
            checkoutProcess.openShopingCart();
            checkoutProcess.addAddressCart('India', 'Other (Non US)');
        } catch (error) {
            cy.log(`Error occurred: ${error}`);
        }
    })
});