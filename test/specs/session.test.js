import LoginPage from '../pageobjects/Login.page';
import HomePage from '../pageobjects/home.page'
import RegistroUserPage from '../pageobjects/registroUser.page'
import DatosCorrectos from '../datos/userypasscorrectos'
import DatosIncorrectos from '../datos/userypassincorrecto'

describe('Session Suite', function()  {
  
  DatosCorrectos.forEach(({username, password}) => {
    it(`Deberia acceder a la pagina principal cuando se loguea con credenciales validas ${username, password}`, async () => {

      await LoginPage.abrir('');      
      await LoginPage.ingresarCredenciales(username,password);
      await LoginPage.clickEnBotonSubmit()
      await HomePage.desloguearse()
      await expect(LoginPage.loginStateFeedback).toHaveTextContaining('Success')
      //await expect(HomePage.title).toExist();
            
    });

  });//Aquí finaliza el forEach correcto

  DatosIncorrectos.forEach(({username, password}) => {
    it(`Deberia no acceder a la pagina principal cuando se loguea con usuario/password invalido${username, password}`, async () => {

      await LoginPage.abrir('login'); 
      await LoginPage.ingresarCredenciales(username, password);
      await LoginPage.clickEnBotonSubmit()
      await expect(LoginPage.loginStateFeedback).toHaveTextContaining('Error')
            
    });
    
  }); //Aqui finaliza forEach incorrecto

    it('Deberia acceder a la pagina principal cuando se loguea con credenciales validas y marcando el checkbox Remember me', async () => {

      await LoginPage.abrir('login');      
      let username = 'nsmith@demo.io'
      let password = 'Demo123!'
      await LoginPage.ingresarCredenciales(username, password);
      await LoginPage.clickEnCheckboxRememberMe();
      await LoginPage.clickEnBotonSubmit();
      await expect(HomePage.title).toExist();
      
    });

    it('Deberia no acceder a la pagina principal cuando se dejan los campos vacios y seleccionando check box Remember me', async () => {

      await LoginPage.abrir('login');      
      let username = ''
      let password = ''
      await LoginPage.ingresarCredenciales(username,password)
      await LoginPage.clickEnCheckboxRememberMe();
      await LoginPage.clickEnBotonSubmit();
      await expect(LoginPage.loginStateFeedback).toHaveTextContaining('Error')
      
    });


    it('Debería de acceder al formulario de registro', async () => {

        await LoginPage.abrir('login');      
        await LoginPage.irAPaginaDeSignUp();
        await expect(RegistroUserPage.form).toExist();
        
    });

    it('Deberia perder la sesion y regresar al login cuando se clickea en boton de log out', async () => {

      await LoginPage.abrir('login');      
      let username = 'nsmith@demo.io'
      let password = 'Demo123!'
      await LoginPage.ingresarCredenciales(username, password);
      await LoginPage.clickEnBotonSubmit()
      await HomePage.desloguearse()
      await expect(LoginPage.loginStateFeedback).toHaveTextContaining('Success')
            
    });
  
 });