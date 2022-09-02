import SignupPage from '../2-advanced-examples/SignupPage';

describe('Pesquisa válida', () => {

    it('Pesquisa válida', () => {

        const pesquisa = 'celular Realme'
            
        var signup = new SignupPage()

        signup.go()
        signup.fillForm(pesquisa)
        signup.submit()

            
    })

    it('Pesquisa inválida', () => {

        const pesquisa = 'Ximporimpola'
            
        var signup = new SignupPage()

        signup.go()
        signup.fillForm(pesquisa)
        signup.submit()

            
    })



   
        
    })

    

