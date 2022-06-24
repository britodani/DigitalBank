const PAGE_TIMEOUT = 10000
import BasePage from '../pageobjects/base.page'

class RegistroUserPage extends BasePage{

get form(){return $('.login-form')}  
get titleDigitalBank(){return $('.align-content')}  
get titleUser(){return $('=Title')}
get selectBoxTituloUser(){return $('#title')}
get firstNameInput(){return $('#firstName')}
get lastNameInput(){return $('#lastName')}
get radioBtnMale(){return $('input[value="M"]')}
get radioBtnFemale(){return $('input[value="F"]')}
get fechaNacimientoInput(){return $('#dob')}
get numeroSeguroSocialInput(){return $('#ssn')}
get emailInput(){return $('#emailAddress')}
get passwordInput(){return $('#password')}
get confirmacionPasswordInput(){return $('#confirmPassword')}
get botonNext(){return $('.btn')}
get btnRegistrar(){return $('.btn')}



/**
    * Método para seleccionar titulo
    
    * @param {String} texto a envíar 
    */
async seleccionarTitulo(option){
        await this.selectBoxTituloUser.selectByVisibleText(option)
        
}

/**
    * Método para seleccionar genero
    
    * @param {String} tipo de genero 
    */
 async seleccionarGenero(genero){
     
     if (genero == 'M') {
        await super.clickearElemento(await this.radioBtnMale);
     }
     else if (genero == 'F') {
        await super.clickearElemento(await this.radioBtnFemale);
     }
 }



/**Metodos para llenar campos de texto en Digital bank
     * 
     * @param {String} firstName
     * @param {String} lastName
     * @param {String} fecNac
     * @param {String} nroSegSoc
     * @param {String} email
     * @param {String} password
     * @param {String} confPass
     */
 async ingresarDatosDeUsuario(firstName, lastName, fecNac, nroSegSoc, email, password, confPass){
 
    await this.vaciarCampoYEnviarTexto(await this.firstNameInput, firstName)
    await this.vaciarCampoYEnviarTexto(await this.lastNameInput, lastName);
    await this.vaciarCampoYEnviarTexto(await this.fechaNacimientoInput, fecNac)
    await this.vaciarCampoYEnviarTexto(await this.numeroSeguroSocialInput, nroSegSoc);
    await this.vaciarCampoYEnviarTexto(await this.emailInput, email)
    await this.vaciarCampoYEnviarTexto(await this.passwordInput, password);
    await this.vaciarCampoYEnviarTexto(await this.confirmacionPasswordInput, confPass)
    
}


/**Metodos para llenar campos de texto en Digital bank
     * 
     * @param {String} nroSegSoc
     * @param {String} password

     */
 async mensajeDeCamposAllenar(){
 
    await this.numeroSeguroSocialInput.isFocused()
    await this.numeroSeguroSocialInput.getAttribute('title');
    //await this.vaciarCampoYEnviarTexto(await this.passwordInput.getAttribute('title'), password);
    
}

async clickEnBotonNext(){
    await super.clickearElemento(await this.botonNext);  
}

async volveraLogin() {
    await super.clickearElemento(await this.titleDigitalBank);
    
}


}
export default new RegistroUserPage();