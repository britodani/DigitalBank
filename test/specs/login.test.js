import loginPage from '../pageobjects/Login.page';
import homePage from '../pageobjects/home.page'
import formu from '../pageobjects/form.page'

describe('Login Suite', () => {
  
    it('Deberia acceder a la pagina principal cuando se loguea con credenciales validas', async () => {

      await loginPage.abrir('');      
      let username = 'jsmith@demo.io'
      let password = 'Demo123!'
      await loginPage.ingresarCredenciales(username, password);
      await loginPage.ClickEnBotonSubmit()
      await expect(homePage.title).toExist();
            
    });
    
    it('Deberia no acceder a la pagina principal cuando se loguea con usuario invalido', async () => {

      await loginPage.abrir('login');      
      let username = 'dsmith@demo.io'
      let password = 'Demo123!'
      await loginPage.ingresarCredenciales(username, password);
      await loginPage.ClickEnBotonSubmit()
      await expect(loginPage.loginStateFeedback).toHaveTextContaining('Error')
            
    });


    it('Deberia no acceder a la pagina principal cuando se loguea con password invalida', async () => {

      await loginPage.abrir('login');      
      let username = 'jsmith@demo.io'
      let password = 'demo123!'
      await loginPage.ingresarCredenciales(username, password);
      await loginPage.ClickEnBotonSubmit()
      await expect(loginPage.loginStateFeedback).toHaveTextContaining('Error')
            
    });

    it('Deberia acceder a la pagina principal cuando se loguea con credenciales validas y marcando el checkbox Remember me', async () => {

      await loginPage.abrir('login');      
      let username = 'nsmith@demo.io'
      let password = 'Demo123!'
      await loginPage.ingresarCredenciales(username, password);
      await loginPage.ClickEnCheckboxRememberMe();
      await loginPage.ClickEnBotonSubmit();
      await expect(homePage.title).toExist();
      
    });

    it('Deberia no acceder a la pagina principal cuando se dejan los campos vacios y seleccionando check box Remember me', async () => {

      await loginPage.abrir('login');      
      let username = ''
      let password = ''
      await loginPage.ingresarCredenciales(username,password)
      await loginPage.ClickEnCheckboxRememberMe();
      await loginPage.ClickEnBotonSubmit();
      await expect(loginPage.loginStateFeedback).toHaveTextContaining('Error')
      
    });

    it('Debería de acceder al formulario de registro', async () => {

      await loginPage.abrir('login');      
      await loginPage.irAPaginaDeSignUp();
      await expect(formu.form).toExist();
      
    });

 });