import BasePage from '../pageobjects/base.page';

class HomePage extends BasePage{

    //Elementos Web
    get tittle(){return $('#page-title')}
    get avatar(){return $('.user-avatar')}
    get logout(){return $('.fa-power-off')}

   //-------------------------------------------------------------------------------------------------------//
 
   /**
    * Click en el resultado de la búsqueda
    */
   async salirHome() {
       await super.clickearElemento(await this.avatar);
       await super.clickearElemento(await this.logout);
   }

   /**
    * Obtener texto del resultado de la búsqueda
    
   async obtenerNombreResultado() {
       await this.tittle.getText();
          }*/


}
export default new HomePage();