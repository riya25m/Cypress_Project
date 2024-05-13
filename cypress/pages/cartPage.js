import {addItemToCart, searchData} from '../fixtures/testData'
import * as cartLocators from '../locators/cartLocators.json'

export class CartPage{

    validateProductsOnHomePage() {
        cy.visible(cartLocators.productList);
    }

    addGiftCardInCart(value, num) {
        cy.addToGiftCart(value, addItemToCart.recipientName, addItemToCart.recipientEmail, addItemToCart.yourName, addItemToCart.yourEmail, addItemToCart.message, num);
    }

    addMultiItemToCart(value, value1, num) {
        cy.addMultiItemToCart(value, value1, num);
    }

    addToCartItem() {
        cy.addToCart();
    }
}