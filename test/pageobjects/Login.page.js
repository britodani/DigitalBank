
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
    get flash() {return $('.badge')}

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

   /*
    async loguearenter(username,password){
        await this.usernamein(username).keys('tab')
        await this.passwordin(password).keys('tab')
        await this.signin.keys('enter')
    }*/

    async loguearclickreme(username,password){
        await this.vaciarCampoYEnviarTexto(await this.usernamein,username)
        await this.vaciarCampoYEnviarTexto(await this.passwordin,password);
        await this.clickearElemento(await this.rememberme)
        await this.clickearElemento(await this.signin);
    }

    

    async crearcta(){
        await this.clickearElemento(await this.signuphere);
    }
  

}
export default new Login();