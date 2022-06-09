import BasePage from '../pageobjects/base.page'

class RegistroUser extends BasePage{

get form(){return $('.login-form')}    
get formTitle(){return $('=Title')}

async volveraLogin() {
    await super.clickearElemento(await this.formTitle);
    
}


}
export default new RegistroUser();