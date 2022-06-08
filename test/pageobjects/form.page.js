import BasePage from '../pageobjects/base.page'

class Form extends BasePage{

get form(){return $('.login-form')}    
get formTitle(){return $('=Title')}

async volveraLogin() {
    await super.clickearElemento(await this.formTitle);
    
}


}
export default new Form();