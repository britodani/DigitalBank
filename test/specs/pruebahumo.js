describe('OpenCart', () => {
  
    it('login bank', async () => {

      await browser.maximizeWindow()
      await browser.url('');
      let user = await $('#username');
      await user.setValue('jsmith@demo.io');
      let pass = await $('#password');
      await pass.setValue('Demo123!');
      let btn = await $('#submit');
      await btn.click();
      let panel = await $('#balanceSummary')
      await expect(panel).toExist()
      
    });
    
 });