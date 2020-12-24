import MainPage from '../PageObject/MainPage'

describe('TestSuite', () => {
  const mainPage=new MainPage()
  it('VerifyOfTitle', function ()
  {
    mainPage.visitMainPage()
    cy.url().should('include','en')
    cy.title().should('eq','Wikipedia, the free encyclopedia')
  })
  
  it('VerifyOfSearch', function ()
  {
    mainPage.searchInput().should('be.visible').should('be.enabled').type('Ukraine')
    mainPage.searchButton().should('be.visible').should('be.enabled').click()
    cy.title('eq',"Ukraine")
    cy.url().should('include','Ukraine')
  })

  it('VerifyOfSearchSuggestions',function()
  {
    cy.go('back')
    mainPage.searchInput().should('be.visible').should('be.enabled').type('Ukr')
    mainPage.suggestionsResult().each(($e,index,$list) => {
      const text=$e.text()
      expect(text).to.be.equal("Ukr")
    })
  })

  it('VerifyThatLanguageSettingsDialogIsOpenedAfterUserClicksOnSettingsButton',function ()
  {
    mainPage.languageSettingsButton().click()  
    mainPage.languageSettingsModel().should('be.visible')
  })

  it('VerifyThatanguageSettingsDialogIsClosedAfterUserCliksOnCancelButton',function()
  {
    mainPage.languageSettingsModelCancelButton().click()
    mainPage.languageSettingsModel().should('not.be.visible')
  })

  it('VerifyEnablingOfDifferentFontFamilyInLanguageSettings',function() 
  {
    mainPage.languageSettingsButton().click()
    mainPage.languageSettingsModelFontsTabButton().click()
    mainPage.languageSettingsModelFontsTab().should('be.visible')
    mainPage.languageSettingsModelFontsTabWebfontsCheckbox().check().should('be.checked')
    mainPage.languageSettingsModelFontsTabContentFontsTab().should('be.visible')
    mainPage.languageSettingsModelFontsTabContentFontsSelector().select('ComicNeue').should('have.value','ComicNeue')
    mainPage.languageSettingsModelFontsTabApplySettingsButton().click()
    mainPage.languageSettingsModel().should('not.be.visible')
    mainPage.pageContent().should('have.css','font-family').and('contain','ComicNeue')
  })

  it('VerifyThatSelectedLanguageIsEnabledInSearchInputModalAfterUserSelectsItInLanguageSettings', function()
  {
    mainPage.languageSettingsButton().click()
    mainPage.languageSettingsModelInputTrigger().click()
    mainPage.languageSettingsModelInputToggleButton().click()
    mainPage.languageSettingsModelEngLanguage().click()
    mainPage.languageSettingsModelInputIPAXSMPA().check({force: true}).should('be.checked')
    mainPage.languageSettingsModelFontsTabApplySettingsButton().click()
    mainPage.languageSettingsModel().should('not.be.visible')
    mainPage.searchInput().click()
    mainPage.searchImaSelector().should('be.visible').click()
    mainPage.searchImaSelectorToggle().should('be.visible')
    mainPage.searchIPAXSMPAMethod().contains('International Phonetic Alphabet - X-SAMPA').should('be.visible')
    mainPage.searchIPAXSMPAMethod().should('have.attr','class').and('contain','ime-checked')
  })

})
