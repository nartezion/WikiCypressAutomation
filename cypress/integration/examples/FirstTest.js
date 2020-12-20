describe('TestSuite', () => {
    it('VerifyOfTitle', function ()
    {
      cy.visit("")
      cy.url().should('include','en')
      cy.title().should('eq','Wikipedia, the free encyclopedia')
    })
    
    it('VerifyOfSearch', function ()
    {
      cy.get('#searchInput').should('be.visible').should('be.enabled').type('Ukraine')
      cy.get('#searchButton').should('be.visible').should('be.enabled').click()
      cy.title('eq',"Ukraine")
      cy.url().should('include','Ukraine')
    })
    
    it('VerifyOfSearchSuggestions',function()
    {
      cy.go('back')
      cy.get('#searchInput').should('be.visible').should('be.enabled').type('Ukr')
      cy.get('.suggestions-result span').each(($e,index,$list) => {
        const text=$e.text()
        expect(text).to.be.equal("Ukr")
      })
    })

    it('VerifyThatLanguageSettingsDialogIsOpenedAfterUserClicksOnSettingsButton',function ()
    {
      cy.get('#p-lang button').click()  
      cy.get('#language-settings-dialog').should('be.visible')
    })

    it('VerifyThatanguageSettingsDialogIsClosedAfterUserCliksOnCancelButton',function()
    {
      cy.get("button[class*='cancel']").click()
      cy.get('#language-settings-dialog').should('not.be.visible')
    })

    it('VerifyEnablingOfDifferentFontFamilyInLanguageSettings',function() 
    {
      cy.get('#p-lang button').click()
      cy.get("[id*='fonts-tab']").click()
      cy.get("[class*='fonts-tab']").should('be.visible')
      cy.get('#webfonts-enable-checkbox').check().should('be.checked')
      cy.get("[class*='content-fonts']").should('be.visible')
      cy.get('#content-font-selector').select('ComicNeue').should('have.value','ComicNeue')
      cy.get("[class*='settings-apply']").click()
      cy.get('#language-settings-dialog').should('not.be.visible')
      cy.get('#content').should('have.css','font-family').and('contain','ComicNeue')
    })

    it('VerifyThatSelectedLanguageIsEnabledInSearchInputModalAfterUserSelectsItInLanguageSettings', function()
    {
      cy.get('#p-lang button').click()
      cy.get('#input-panel-trigger').click()
      cy.get("[class*='input-toggle-button']").click()
      cy.get("button[lang='en']").click()
      cy.get('#ipa-x-sampa').check({force: true}).should('be.checked')
      cy.get("[class*='settings-apply']").click()
      cy.get('#language-settings-dialog').should('not.be.visible')
      cy.get('#searchInput').click()
      cy.get("[class='imeselector imeselector-toggle']").should('be.visible').click()
      cy.get("[class*='imeselector-toggle']").should('be.visible')
      cy.get("li[data-ime-inputmethod*='ipa-x-sampa']").contains('International Phonetic Alphabet - X-SAMPA').should('be.visible')
      cy.get("li[data-ime-inputmethod*='ipa-x-sampa']").should('have.attr','class').and('contain','ime-checked')
    })

  })
