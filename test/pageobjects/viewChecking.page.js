import BasePage from '../pageobjects/base.page'

class ViewCheckingPage extends BasePage{

get viewCheckingAccounts(){return $('#page-title')}
get confirmacionChecking(){return $('.badge')}




}
export default new ViewCheckingPage();

