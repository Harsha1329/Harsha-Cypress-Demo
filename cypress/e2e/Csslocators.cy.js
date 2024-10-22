describe('Css Locators', () => {

    it('CssLocators', () => {
      
        cy.visit("https://www.google.com/")
        cy.get("#APjFqb").type("setup")
        cy.get("div[aria-label='setup my device']").click()
        cy.url().should('include',"setup+my+device").and('include',"www.google.com").and('not.contain','testt')
       // cy.get('.srp')
        //   .should('contain', 'Tool')   
        
    })

})