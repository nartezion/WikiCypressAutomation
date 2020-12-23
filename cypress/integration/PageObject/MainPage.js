class MainPage {

    visitMainPage(){
        cy.visit('')
    }

    searchInput(){
        return cy.get('#searchInput')
    }

    searchButton(){
        return cy.get('#searchButton')
    }

    suggestionsResult(){
        return cy.get('.suggestions-result span')
    }

    languageSettingsButton(){
        return cy.get('#p-lang button')
    }

    languageSettingsModel(){
        return cy.get('#language-settings-dialog')
    }

    languageSettingsModelCancelButton(){
        return cy.get("button[class*='cancel']")
    }






}

export default MainPage;