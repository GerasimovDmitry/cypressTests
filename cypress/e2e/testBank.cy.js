import BankManagerPage from "../integration/PageObject/BankManagerPage";
import CustomerPage from "../integration/PageObject/CustomerPage";
const bankManagerPage = new BankManagerPage();
const customerPage = new CustomerPage();

describe('template spec', () => {
  it('test bank manager page', () => {
    bankManagerPage.navigate();
    bankManagerPage.addRecord("test");
    bankManagerPage.checkRecord("test");
    bankManagerPage.deleteRecord("test");
    bankManagerPage.getRecord("test").should('not.exist');
  })
})