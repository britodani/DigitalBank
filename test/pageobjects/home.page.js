import BasePage from '../pageobjects/base.page';

class HomePage extends BasePage{

    //Elementos Web
    
    get avatar(){return $('.user-avatar')}
    get logout(){return $('.fa-power-off')}

   
   async desloguearse() {
       await super.clickearElemento(await this.avatar);
       await super.clickearElemento(await this.logout);
   }

}
export default new HomePage();