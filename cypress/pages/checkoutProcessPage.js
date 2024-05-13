import {addItemToCart, searchData} from '../fixtures/testData'
import * as chechoutProcessLocators from '../locators/checkoutProcesslocators.json'

export class CheckoutProcess{

    openShopingCart () {
        cy.get(chechoutProcessLocators.shopingCartLink).click();
    }

    addAddressCart (optionText, optionText2) {
        cy.addAddress(optionText, optionText2);
    }

}