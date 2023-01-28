describe('Test2', () => { 
    beforeEach(()=>{
        cy.visit("https://demo.automationtesting.in/Register.html")
    })

    it("Test1",()=>{
        cy.get('[ng-model="EmailAdress"]');
        // cy.xpath('//*[#id="basicBootstrapForm"]/div[2]/div/textarea').type('teste')
        // cy.get("#Skills").select("APIs");
        // cy.get('label.checks')
        //     .contains('Cricket')
        //     .should("be.visited");
        // cy.get('input[value=Cricket]').check()
    })

    const emailBeforeeach = require("../../fixtures/email.json")
    emailBeforeeach.forEach((email)=>{
        it('Test2'+email.emails,()=>{
            // see command email in support/commands
            cy.email(email.emails) 
        })
    })

 })