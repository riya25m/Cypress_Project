import {Configutils} from "../utils/configutils"
import {HomePage} from "../pages/homePage"
import {SearchPage} from "../pages/searchPage"

let configUtils = new Configutils();
let homePage = new HomePage();
let searchPage = new SearchPage();

describe('Product browsing and searching', () => {

  beforeEach(() => {
    cy.visit(configUtils.geturl());
    cy.url().should("include", "tricentis.com");
    homePage.validateHomePage();
    searchPage.enterValueInSearch();
    searchPage.validateDropdownList();
  })

  it('Valiadte SearchBar', () => {
    try {
      searchPage.clickOnSearchButton();
      searchPage.validateSearchResult();
    } catch (error) {
      cy.log(`Error occurred: ${error}`);
    }
  })

  it('Validate search option by selecting option from dropdownlist', () => {
    try {
      searchPage.selectOptionFromDropdownList();
      searchPage.validateDropdownSearchResult();
    } catch (error) {
      cy.log(`Error occurred: ${error}`);
    }
  })

  it('Validate Advanced Search', () => {
    try {
      searchPage.clickOnSearchButton();
      searchPage.validateSearchResult();
      searchPage.validateAndCheckAdvanceSearch();
      searchPage.selectCatogoryOption();
      searchPage.selectManufacturer();
      searchPage.enterPriceFilter();
      searchPage.clickOnSearchButtonInInput();
      searchPage.validateSearchResult();
    } catch (error) {
      cy.log(`Error occurred: ${error}`);
    }
  })
})
