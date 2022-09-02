class SignupPage {
    go() {

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
       
        cy.visit('https://www.olx.com.br/')
        
    }

    fillForm(pesquisa) {

    cy.xpath('//*[@id="searchtext-input"]').type(pesquisa)

    cy.scrollTo(0, 500)
	
        
         cy.wait(4000)              
        cy.screenshot()
        
            }

            submit() {
                cy.get('.search-button-submit').click() //clica no botao de pesquisa

            }

}

export default SignupPage;
