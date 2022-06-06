
import $ from 'webdriverio/build/commands/browser/$'
import BasePage from '../pageobjects/base.page'

class Login extends BasePage{

    //WebElements
    get principal(){return $('.align-content')}
    get tittle(){return $('.login-logo')}
    get usernamein(){ return $('#username') }
    get passwordin(){return $('#password')}
    get rememberme(){return $('#remember-me')}
    get signin(){return $('#submit')}
    get signuphere(){return $('=Sign Up Here')}
    get flash() {return $('.sufee-alert')}

    /**Metodos para iniciar sesion en Digital bank
     * @param {String} user
     * @param {String} password
     * 
     */
    async loguearclick(username,password){
        await this.vaciarCampoYEnviarTexto(await this.usernamein,username)
        await this.vaciarCampoYEnviarTexto(await this.passwordin,password);
        await this.clickearElemento(await this.signin);
        
    }

   
    async loguearenter(){
        await this.signin.keys('\uE007');
    }

    async loguearclickreme(){
        await this.rememberme.click();
        await this.signin.click();
    }

    async crearcta(){
        await this.signuphere.click();
    }
  

}
export default new Login();