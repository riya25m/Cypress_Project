export class DriverUtils{

    getElement(pstrElement){
        let typeOfLocator = pstrElement.split("-->")[0]
        let locator = pstrElement.split("-->")[1]
        if(typeOfLocator == "xpath"){
            return cy.xpath(locator)
        }else if(typeOfLocator=="css"){
            return cy.get(locator)
        }
    }

    getText(pstrElement){
        let ele = this.getElement(pstrElement)
        let txt= ""
         ele.then((e)=>{
            txt = e.text()
        })
        return txt
    }
}

