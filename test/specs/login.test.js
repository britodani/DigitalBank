import LoginPage from '../pageobjects/Login.page';
import HomePage from '../pageobjects/home.page'
import RegistroUserPage from '../pageobjects/registroUser.page'

describe('Login Suite', () => {
  
    it('Deberia acceder a la pagina principal cuando se loguea con credenciales validas', async () => {

      await LoginPage.abrir('');      
      let username = 'jsmith@demo.io'
      let password = 'Demo123!'
      await LoginPage.ingresarCredenciales(username, password);
      await LoginPage.clickEnBotonSubmit()
      await expect(HomePage.title).toExist();
            
    });
    
    it('Deberia no acceder a la pagina principal cuando se loguea con usuario invalido', async () => {

      await LoginPage.abrir('login');      
      let username = 'dsmith@demo.io'
      let password = 'Demo123!'
      await LoginPage.ingresarCredenciales(username, password);
      await LoginPage.clickEnBotonSubmit()
      await expect(LoginPage.loginStateFeedback).toHaveTextContaining('Error')
            
    });


    it('Deberia no acceder a la pagina principal cuando se loguea con password invalida', async () => {

      await LoginPage.abrir('login');      
      let username = 'jsmith@demo.io'
      let password = 'demo123!'
      await LoginPage.ingresarCredenciales(username, password);
      await LoginPage.clickEnBotonSubmit()
      await expect(LoginPage.loginStateFeedback).toHaveTextContaining('Error')
            
    });

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

 });