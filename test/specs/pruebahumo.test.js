import login from '../pageobjects/Login.page';
import homePage from '../pageobjects/home.page'
import $ from 'webdriverio/build/commands/element/$';


describe('prubahumo', () => {
  
    it('login bank', async () => {
       
      await browser.url('');
      let user = await $('#username');
      await user.setValue('jsmith@demo.io');
      let pass = await $('#password');
      await pass.setValue('Demo123!');
      let btn = await $('#submit');
      await btn.click();
      let panel = await $('#balanceSummary')
      await expect(panel).toExist()
      
     /* await login.abrir('');
      await browser.pause(5000)
      let tit  = await $('.login-logo')
      console.log(await tit.getText())
      let username = 'jsmith@demo.io'
      let password = 'Demo123!'
      await login.loguearclick(username, password);
*/
      
      //await expect(await homePage.obtenerNombreResultado()).toHaveTextContaining('Welcome Josh')
      
    });
    
 });