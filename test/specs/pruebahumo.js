describe('OpenCart', () => {

  

    it('login bank', async () => {

      browser.maximizeWindow()
      await browser.url('http://localhost:8080/bank');
      let user = await $('#username');
      await user.setValue('jsmith@demo.io');
      let pass = await $('#password');
      await pass.setValue('Demo123!');
      let btn = await $('#submit');
      btn.click();
      let panel = await $('#balanceSummary')
      await expect(panel).toExist()
      await browser.pause(10000)
      
    
    });

    it('Revisar Cuenta', async () => {

        let cuentas = await $('.dropdown-toggle');
        await cuentas.click();
        let vercta = await $('#view-checking-menu-item')
        await vercta.click();
        let inf = await $('.text-light=Account Number: 486130005');
        await browser.pause(5000)
        expect(await inf.getText()).toEqual('Account Number: 486130005')
        
      
      });

    
 });