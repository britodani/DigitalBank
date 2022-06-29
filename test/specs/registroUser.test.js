import LoginPage from '../pageobjects/Login.page'
import RegistroUserPage from '../pageobjects/registroUser.page'
import DatosRegistroUserFail from '../datos/noRegistroUser'
import DatosRegistroUser from   '../datos/registroUser'


describe('Registro de Usuario', () => {

  DatosRegistroUserFail.forEach(({title, firstName, lastName, genero, fecNac, nroSegSoc, email, password, confPass, reason}) => {   
    it(`Debería de no avanzar al siguiente formulario porque ${reason}`, async () => {

        await LoginPage.abrir('login');      
        await LoginPage.irAPaginaDeSignUp();
        await RegistroUserPage.seleccionarTitulo(title)
        await RegistroUserPage.seleccionarGenero(genero)
        await RegistroUserPage.ingresarDatosDeUsuario(firstName, lastName, fecNac, nroSegSoc, email, password, confPass)
        await RegistroUserPage.clickEnBotonNext();
        await expect(RegistroUserPage.selectBoxTituloUser).toHaveTextContaining('Please select');
        
    });
    })

    DatosRegistroUser.forEach(({title, firstName, lastName, genero, fecNac, nroSegSoc, email, password, confPass}) => {   
        it(`Debería de avanzar al siguiente formulario con los campos llenos`, async () => {

            await LoginPage.abrir('login');      
            await LoginPage.irAPaginaDeSignUp();
            await RegistroUserPage.seleccionarTitulo(title)
            await RegistroUserPage.seleccionarGenero(genero)
            await RegistroUserPage.ingresarDatosDeUsuario(firstName, lastName, fecNac, nroSegSoc, email, password, confPass)
            await RegistroUserPage.clickEnBotonNext();
            await expect(RegistroUserPage.btnRegistrar).toHaveTextContaining('REGISTER');
            
        });

    });


    it('Debería de regresar al login al presionar el titulo del formulario', async () => {

        await LoginPage.abrir('login');      
        await LoginPage.irAPaginaDeSignUp();
        await RegistroUserPage.volveraLogin()
        await expect(LoginPage.signUpHere).toHaveTextContaining('Sign Up Here')
        
    });

  

    
});