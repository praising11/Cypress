describe('suit name',function()
{
    it('Test1',()=>{   // => is arrrow function  => (or) function() both are same.
        cy.visit('https://the-internet.herokuapp.com/') //postive testcase
        cy.title().should('equal','The Internet')   //assertion for title
    } )

    it('test2',function(){
        cy.visit("https://the-internet.herokuapp.com/")
        cy.title().should('eq','The Internet1')  //negative test case.
    }

    )

})