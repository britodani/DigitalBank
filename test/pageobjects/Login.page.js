
import BasePage from '../pageobjects/base.page'

class LoginPage extends BasePage{

    //WebElements
    get title(){return $('.login-logo')}
    get usernameInput(){ return $('#username') }
    get passwordInput(){return $('#password')}
    get rememberMeCheckBox(){return $('#remember-me')}
    get signInButton(){return $('#submit')}
    get signUpHere(){return $('=Sign Up Here')}
    get loginStateFeedback() {return $('.badge')}

    /**Metodos para iniciar sesion en Digital bank
     * @param {String} user
     * @param {String} password
     * 
     */
    async ingresarCredenciales(username,password){
        await this.vaciarCampoYEnviarTexto(await this.usernameInput,username)
        await this.vaciarCampoYEnviarTexto(await this.passwordInput,password);
    }

    async clickEnBotonSubmit(){
        await this.clickearElemento(await this.signInButton);  
    }

    async clickEnCheckboxRememberMe(){
        await this.clickearElemento(await this.rememberMeCheckBox)
    }


    async irAPaginaDeSignUp(){
        await this.clickearElemento(await this.signUpHere);
    }
  

}
export default new LoginPage();