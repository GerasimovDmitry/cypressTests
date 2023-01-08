import {Then, When} from "@badeball/cypress-cucumber-preprocessor";

class CustomerPage {
    navigate(){
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/");
    }
    selectCustomer(value) {
        cy.get("select[ng-model=custId]").select(value);
    }

    login() {
        cy.get("button").contains("Login").click();
    }

    navigateLogin() {
        cy.get("button").contains("Customer Login").click();
    }

    loginAlert(value) {
        cy.get("span[class='fontBig ng-binding']").contains(value);
    }

    deposit() {
        cy.get("button").contains("Deposit").click();
    }

    typeAmount(value) {
        cy.get("input[ng-model='amount']").type(value);
        cy.get("button[type=submit]").contains("Deposit").click();
    }

    depositAlert() {
        cy.get("span").contains("Deposit Successful");
    }

    withdrawl() {
        cy.get("button").contains("Withdrawl").click();
    }

    withdraw() {

    }

    typeAmountWithdraw(value) {
        cy.wait(2000);
        cy.get("input[ng-model='amount']").type(value);
        cy.wait(1000);
        cy.get("button[type=submit]").contains("Withdraw").click();
    }

    transactions() {
        cy.wait(1000);
        cy.get("button").contains("Transactions").click();
        cy.wait(1000);
    }

    checkTransactions(count, amount, type1, type2) {
        cy.wait(1000);
        cy.get("tbody").children().should('have.length', count);
        cy.get('tr').eq(1).should('contain', type1);
        cy.get('tr').eq(1).should('contain', amount);
        cy.get('tr').eq(2).should('contain', type2);
        cy.get('tr').eq(2).should('contain', amount);
    }

    sortByDate() {
        cy.wait(1000);
        cy.get("a").contains("Date-Time").click();
        cy.wait(1000);
    }

    checkSort(count, amount, type1, type2) {
        cy.wait(1000);
        cy.get("tbody").children().should('have.length', count);
        cy.get('tr').eq(1).should('contain', type2);
        cy.get('tr').eq(1).should('contain', amount);
        cy.get('tr').eq(2).should('contain', type1);
        cy.get('tr').eq(2).should('contain', amount);
    }

    resetTransactions() {
        cy.wait(1000);
        cy.get("button").contains("Reset").click();
        cy.wait(1000);
    }

    checkEmptyListOfTransactions() {
        cy.wait(1000);
        cy.get("tbody").children().should('have.length', 0);
        cy.wait(1000);
    }
}
export default CustomerPage;