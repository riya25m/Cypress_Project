export class HomePage{

    homeTitle = ".header-logo  a  img";

    validateHomePage(){
        return cy.get(this.homeTitle).should("have.attr","alt","Tricentis Demo Web Shop");
    }
}