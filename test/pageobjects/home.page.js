
import BasePage from '../pageobjects/base.page';

class HomePage extends BasePage{

    //Elementos Web
    get tittle(){return $('#page-title')}

   //-------------------------------------------------------------------------------------------------------//
 
   /**
    * Click en el resultado de la búsqueda
    
   async ingresarAlhome() {
       await super.clickearElemento(this.bienvenida);
   }*/

   /**
    * Obtener texto del resultado de la búsqueda
    */
   async obtenerNombreResultado() {
       await this.tittle.getText();
          }


}
export default new HomePage();