import BasePage from '../pageobjects/base.page';

class HomePage extends BasePage{

    //Elementos Web
    
    get avatar(){return $('.user-avatar')}
    get logout(){return $('.fa-power-off')}
    get checkingFather(){return $('#checking-menu')}
    get newChecking(){return $('#new-checking-menu-item')}

    async seleccionarChecking() {
        await super.clickearElemento(await this.checkingFather);
        await super.clickearElemento(await this.newChecking);
    }   

    async desloguearse() {
       await super.clickearElemento(await this.avatar);
       await super.clickearElemento(await this.logout);
    }

}
export default new HomePage();