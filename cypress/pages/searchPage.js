import {searchData} from '../fixtures/testData'
import * as searchPageLocators from "../locators/searchPageLocators.json"

let searchValue;

export class SearchPage{

    enterValueInSearch() {
        cy.typeValue(searchPageLocators.searchBar, searchData.searchValue);
    }

    validateDropdownList() {
        cy.visible(searchPageLocators.searchDropDownMenu);
    }

    clickOnSearchButton() {
         cy.visibleAndclick(searchPageLocators.searchButton);
    }

    validateSearchResult() {
         cy.visible(searchPageLocators.searchResult);
    }

    selectOptionFromDropdownList() {
         cy.selectDropdownIndex(searchPageLocators.searchDropDownList, 0).then(($a) => {
            searchValue = $a.text();
        })
    }

    validateDropdownSearchResult() {
         cy.get(searchPageLocators.dropdownResult, searchValue)
         .should(($h1) => {
            expect($h1.text()).to.contains(searchValue);
        })
    }

    validateAndCheckAdvanceSearch() {
         cy.Checked(searchPageLocators.advancedSearchCheckBox);
    }

    selectCatogoryOption() {
         cy.selectDropdownOption(searchPageLocators.category, "Computers >> Desktops", 3)
    }

    selectManufacturer() {
         cy.selectDropdownOption(searchPageLocators.manufacturer, 'All', 0)
    }

    enterPriceFilter() {
         cy.typeValue(searchPageLocators.priceFrom, searchData.priceFrom).then(() => {
            cy.typeValue(searchPageLocators.priceTo, searchData.priceTo)
        })
    }

    clickOnSearchButtonInInput() {
         cy.visibleAndclick(searchPageLocators.searchInsideInput);
    }
}