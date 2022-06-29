import BasePage from '../pageobjects/base.page'

class NewCheckingPage extends BasePage{

get radioBtnStandarChecking(){return $('#Standard Checking]')}
get radioBtnInterestChecking(){return $('#Interest Checking')}
get radioBtnIndividual(){return $('#Individual')}
get radioBtnJoint(){return $('#Joint')}
get accountName(){return $('#name')}
get initialMount(){return $('#openingBalance')}
get btnNewCheckingSubmit(){return $('#newCheckingSubmit')}



/**
    * Método para seleccionar tipo de cuenta
    
    * @param {String} tipo de cuenta 
    */
 async seleccionarCheckingAccountType(cuenta){

     if (cuenta == 'Standard Checking') {
        await super.clickearElemento(await this.radioBtnStandarChecking);
     }
     else if (cuenta == 'Interest Checking') {
        await super.clickearElemento(await this.radioBtnInterestChecking);
     }
 }

/**
    * Método para seleccionar genero
    
    * @param {String} tipo de genero 
    */
 async seleccionarAccountOwnership(titularidad){

    if (titularidad == 'Individual') {
       await super.clickearElemento(await this.radioBtnIndividual);
    }
    else if (titularidad == 'Joint') {
       await super.clickearElemento(await this.radioBtnJoint);
    }
}


/**Metodos para llenar campos de texto en Digital bank
     * 
     * @param {String} Account name
     * @param {Number} initial mount
     */
 async ingresarDatosDeUsuario(accName, iniMount){

    await this.vaciarCampoYEnviarTexto(await this.accountName, accName)
    await this.vaciarCampoYEnviarTexto(await this.initialMount, iniMount);

}

async clickEnBotonSubmit(){
    await super.clickearElemento(await this.btnNewCheckingSubmit);  
}



}
export default new NewCheckingPage();