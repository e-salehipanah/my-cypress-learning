const { expect } = require("chai")

describe('Test4', () => { 

    it('Test1',()=>{
        cy.request({
            method: 'GET',
            url: 'http://api.nasa.gov/planetray/apod?api_key=DEMO_KEY'
        }).then((res)=>{
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body.date).to.be.equal('2022-06-26')
        })
    })

 })