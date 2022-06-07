import BasePage from '../pageobjects/base.page'

class Form extends BasePage{

get form(){return $('.login-form')}    
get titform(){return $('=Title')}

async volverLogin() {
    await super.clickearElemento(await this.titform);
    
}


}
export default new Form();