import BasePage from '../pageobjects/base.page'

class NewCheckingPage extends BasePage{

get titleNewCheckingAccount(){return $('.card-title')}   
get radioBtnStandarChecking(){return $('input[value="8"]')}
get radioBtnInterestChecking(){return $('input[value="9"]')}
get radioBtnIndividual(){return $('input[value="17"]')}
get radioBtnJoint(){return $('input[value="18"]')}
get accountName(){return $('#name')}
get initialMount(){return $('#openingBalance')}
get btnNewCheckingSubmit(){return $('#newCheckingSubmit')}



/**
    * Método para seleccionar tipo de cuenta
    
    * @param {String} tipo de cuenta 
    */
 async seleccionarCheckingAccountType(cuenta){

     if (cuenta == '8') {
        await super.clickearElemento(await this.radioBtnStandarChecking);
     }
     else if (cuenta == '9') {
        await super.clickearElemento(await this.radioBtnInterestChecking);
     }
 }

/**
    * Método para seleccionar titularidad
    
    * @param {String} tipo de titularidad 
    */
 async seleccionarAccountOwnership(titularidad){

    if (titularidad == '17') {
       await super.clickearElemento(await this.radioBtnIndividual);
    }
    else if (titularidad == '18') {
       await super.clickearElemento(await this.radioBtnJoint);
    }
}


/**Metodos para llenar campos de texto en Digital bank
     * 
     * @param {String} Account name
     * @param {Number} initial mount
     */
 async ingresarDatosCuenta(accName, iniMount){

    await this.vaciarCampoYEnviarTexto(await this.accountName, accName)
    await this.vaciarCampoYEnviarTexto(await this.initialMount, iniMount);

}

async clickEnBotonSubmit(){
    await super.clickearElemento(await this.btnNewCheckingSubmit);  
}



}
export default new NewCheckingPage();