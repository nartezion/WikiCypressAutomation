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

    languageSettingsModelFontsTabButton(){
        return cy.get("[id*='fonts-tab']")
    }

    languageSettingsModelFontsTab(){
        return cy.get("[class*='fonts-tab']")
    }

    languageSettingsModelFontsTabWebfontsCheckbox(){
        return cy.get('#webfonts-enable-checkbox')
    }

    languageSettingsModelFontsTabContentFontsTab(){
        return cy.get("[class*='content-fonts']")
    }

    languageSettingsModelFontsTabContentFontsSelector(){
        return cy.get('#content-font-selector')
    }

    languageSettingsModelFontsTabApplySettingsButton(){
        return cy.get("[class*='settings-apply']")
    }

    pageContent(){
        return cy.get('#content')
    }

    languageSettingsModelInputTrigger(){
        return cy.get('#input-panel-trigger')
    }

    languageSettingsModelInputToggleButton(){
        return cy.get("[class*='input-toggle-button']")
    }

    languageSettingsModelEngLanguage(){
        return cy.get("button[lang='en']")
    }

    languageSettingsModelInputIPAXSMPA(){
        return cy.get('#ipa-x-sampa')
    }

    searchImaSelector(){
        return cy.get("[class='imeselector imeselector-toggle']")
    }

    searchImaSelectorToggle(){
        return cy.get("[class*='imeselector-toggle']")
    }

    searchIPAXSMPAMethod(){
        return cy.get("li[data-ime-inputmethod*='ipa-x-sampa']")
    }










}

export default MainPage;