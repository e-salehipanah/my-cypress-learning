describe('Test', () => { 
    beforeEach(()=>{
        cy.visit("https://www.google.com/ncr")
    })

    it("Test1",()=>{
        cy.get('.gLFyf').type('cypress');
        cy.get('.gLFyf').type('{enter}');
        // cy.get('.hdtb-msel > :nth-child(1)')
        //     .should('have.text','All')
    })
 })

//  npm i -D mochawesome