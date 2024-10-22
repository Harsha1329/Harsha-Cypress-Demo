describe('My First Test', () => {

    it('Positive Test', () => {
      
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
    })

    it('Negative Test', () => {
      
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM123')
    }) 

    it('Test 3', () => {
      
        cy.visit("https://docs.cypress.io/examples/recipes")
        cy.title().should('eq','Recipes | Cypress Documentation')
    })

  })