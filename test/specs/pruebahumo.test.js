import login from '../pageobjects/Login.page';
import homePage from '../pageobjects/home.page'
import formu from '../pageobjects/form.page'

describe('prubahumo', () => {
  
    it('login bank', async () => {

      await login.abrir('');      
      let username = 'jsmith@demo.io'
      let password = 'Demo123!'
      await login.loguearclick(username, password);
      await homePage.salirHome();
      await expect(login.flash).toHaveText('Success')
      
    });
    
    it('login bank user Invalido', async () => {

      await login.abrir('');      
      let username = 'dsmith@demo.io'
      let password = 'Demo123!'
      await login.loguearclick(username, password);
      await expect(login.flash).toHaveText('Error')
            
    });
/*
    it('login bank con enter', async () => {

      await login.abrir('');      
      let username = 'jsmith@demo.io'
      let password = 'Demo123!'
      await login.loguearenter(username, password);
      //await homePage.salirHome();
      //await expect(login.flash).toHaveText('Success')
      
    });*/

    it('login bank pass Invalido', async () => {

      await login.abrir('');      
      let username = 'jsmith@demo.io'
      let password = 'demo123!'
      await login.loguearclick(username, password);
      await expect(login.flash).toHaveText('Error')
            
    });

    it('login bank con remember me', async () => {

      await login.abrir('');      
      let username = 'nsmith@demo.io'
      let password = 'Demo123!'
      await login.loguearclickreme(username, password);
      await homePage.salirHome();
      await expect(login.flash).toHaveText('Success')
      
    });

    it('login bank campos vacios con remember me', async () => {

      await login.abrir('');      
      let username = ''
      let password = ''
      await login.loguearclickreme(username, password);
      await expect(login.flash).toHaveText('Error')
      
    });

    it('login bank Sign Up here', async () => {

      await login.abrir('');      
      let username = ''
      let password = ''
      await login.crearcta();
      await expect(formu.form).toExist();
      
    });

 });