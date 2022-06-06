import login from '../pageobjects/Login.page';
import homePage from '../pageobjects/home.page'

describe('prubahumo', () => {
  
    it('login bank', async () => {
      await login.abrir('');
      await browser.pause(5000)
      let tit  = await $('.login-logo')
      console.log(await tit.getText())
      let username = 'jsmith@demo.io'
      let password = 'Demo123!'
      await login.loguearclick(username, password);
      
      //await expect(await homePage.obtenerNombreResultado()).toHaveTextContaining('Welcome Josh')
      
    });
    
 });