
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import BankManagerPage from "../../integration/PageObject/BankManagerPage";
import CustomerPage from "../../integration/PageObject/CustomerPage";
const bankManagerPage = new BankManagerPage();
const customerPage = new CustomerPage();

Given('В системе присутствуют записи', () => {
    bankManagerPage.navigate();
    bankManagerPage.addRecord("test");
    bankManagerPage.checkRecord("test");
});

When('Пользователь не заполнил поля и нажал на кнопку "Add customer"', () => {
    bankManagerPage.addEmptyRecord();
});

Then('У незаполненных полей появляется подсказка "Заполните это поле"', () => {
    bankManagerPage.checkEmptyTooltip()
});

Given('Открыта страница создания покупателя', () => {
    bankManagerPage.navigate();
});

When('Пользователь ввел значение в фильтр {string}', value => {
    bankManagerPage.filterRecords(value);
});

Then('В списке отображаются записи, наименования которых содержит введенное значение {string}', value => {
    bankManagerPage.checkRecord(value)
});

When('Пользователь нажимает на кнопку "DELETE" записи покупателя {string}', value => {
    bankManagerPage.deleteRecord(value);
});

Then('Запись удалена из списка покупателей', () => {
    bankManagerPage.getRecord("test").should('not.exist');
});

When('Пользователь нажимает на кнопку "Home"', () => {
    bankManagerPage.goHome();
});

Then('Отображается стартовая страница', () => {
    bankManagerPage.checkHome().should('exist');
});


Then('Отображается окно создания счета', () => {
    bankManagerPage.navigateAccount();
});

When('Пользователь выбирает из списка покупателей {string}', value => {
    bankManagerPage.selectCustomer(value);
});

When('Пользователь выбирает из списка валют {string}', value => {
    bankManagerPage.selectCurrency(value);
});

When('Пользователь нажимает кнопку "Process"', () => {
    bankManagerPage.processAccount();
});

Then('Отображается надпись "Account created successfully with account Number"', () => {
    bankManagerPage.checkAccountAlert();
});

When('Пользователь выбирает логин из списка покупателей {string}', value => {
    customerPage.selectCustomer(value);
});

When('Пользователь нажимает кнопку "Login"', () => {
    customerPage.login();
});

Then('Отображается окно с надписью {string}', value => {
    customerPage.loginAlert(value);
});

When('Пользователь нажимает на кнопку "Customer Login"', () => {
    customerPage.navigateLogin();
});

When('Пользователь нажимает кнопку "Deposit"', () => {
    customerPage.deposit();
});

When('Пользователь вводит в поле "Amount" значение {string}', value => {
    customerPage.typeAmount(value);
});

Then('Отображается надпись "Deposit Successful"', () => {
    customerPage.depositAlert();
});

When('Пользователь нажимает кнопку "Withdrawl"', () => {
    customerPage.withdrawl();
});

When('Пользователь нажимает кнопку "Withdraw"', () => {
    customerPage.withdraw();
});

When('Пользователь вводит в поле "Amount Withdraw" значение {string}', value => {
    customerPage.typeAmountWithdraw(value);
});

When('Пользователь нажимает кнопку "Transactions"', () => {
    customerPage.transactions();
});

Then('Отображаются {string} записи транзакций с "Amount" {string} и "Transaction Type" {string} {string}', (count, amount, type1, type2) => {
    customerPage.checkTransactions(count, amount, type1, type2);
});

When('Пользователь нажимает на заголовок "Date-Time"', () => {
    customerPage.sortByDate();
});

Then('Список отсортирован', () => {
    customerPage.checkSort("2", "100", "Credit", "Debit");
});


When('Пользователь нажимает кнопку "Reset"', () => {
    customerPage.resetTransactions();
});

Then('Список транзакций пуст', () => {
    customerPage.checkEmptyListOfTransactions();
});