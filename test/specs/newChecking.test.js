import LoginPage from '../pageobjects/Login.page'
import HomePage  from '../pageobjects/home.page';
import NewChecking from '../pageobjects/newChecking.page'
import ViewChecking from '../pageobjects/viewChecking.page'
import DatosCtaCompleto from '../datos/newChecking'
import DatosCtaIncompleto from '../datos/newNotChecking'

describe('New Checking', () => {

    beforeEach(async () => {
      
        await LoginPage.abrir('login');        
        let username = 'nsmith@demo.io'
        let password = 'Demo123!'
        await LoginPage.ingresarCredenciales(username,password)
        await LoginPage.clickEnBotonSubmit()           

    })

    DatosCtaCompleto.forEach(({cuenta, titularidad,accName, iniMount}) => {
        it(`Deberia seleccionar New Checking y crear cuenta`, async () => {
    
          await HomePage.seleccionarChecking();
          await NewChecking.seleccionarCheckingAccountType(cuenta);
          await NewChecking.seleccionarAccountOwnership(titularidad);
          await NewChecking.ingresarDatosCuenta(accName, iniMount)
          await NewChecking.clickEnBotonSubmit();
          await expect(ViewChecking.confirmacionChecking).toHaveTextContaining('Confirmation')
                
        });
    });//Aquí finaliza el forEach correcto

    DatosCtaIncompleto.forEach(({cuenta, titularidad,accName, iniMount, reason}) => {
        it(`Deberia seleccionar New Checking y no poder crear cuenta por ${reason}`, async () => {
    
          await HomePage.seleccionarChecking();
          await NewChecking.seleccionarCheckingAccountType(cuenta);
          await NewChecking.seleccionarAccountOwnership(titularidad);
          await NewChecking.ingresarDatosCuenta(accName, iniMount)
          await NewChecking.clickEnBotonSubmit();
          await expect(NewChecking.titleNewCheckingAccount).toHaveTextContaining('New Checking Account')
                
        });
    });//Aquí finaliza el forEach correcto
    
    it('Deberia seleccionar New Checking y no poder crear cuenta por no cumplir con monto min', async () => {
    
        await HomePage.seleccionarChecking();
        let cuenta = '9'
        let titularidad = '18'
        let accName = 'Cta parcial'
        let iniMount = '24'
        await NewChecking.seleccionarCheckingAccountType(cuenta);
        await NewChecking.seleccionarAccountOwnership(titularidad);
        await NewChecking.ingresarDatosCuenta(accName, iniMount)
        await NewChecking.clickEnBotonSubmit();
        await expect(ViewChecking.confirmacionChecking).toHaveTextContaining('Error')
              
      });
      
    
});