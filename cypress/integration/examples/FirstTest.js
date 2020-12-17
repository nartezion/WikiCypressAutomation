describe('TestSuite', () => {
    it('VerifyOfTitle', () =>
    {
      cy.visit("")
      cy.url().should('include','en')
      cy.title().should('eq','Wikipedia, the free encyclopedia')
    })
    it('VerifyOfSearch',function()
    {
      cy.visit("")
      cy.get('#searchInput').should('be.visible').should('be.enabled').type('Ukraine')
      cy.get('#searchButton').should('be.visible').should('be.enabled').click()
      cy.title('eq',"Ukraine")
      cy.url().should('include','Ukraine')
    })
  })