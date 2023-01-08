class BankManagerPage {
    navigate(){
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/");
        cy.get("button").contains("Bank Manager Login").click();
    }
    checkRecord(recordName) {
        cy.get("button").contains("Customers").click();
        cy.get("td").contains("First Name").get("td[class='ng-binding']").contains(recordName);
    }
    addRecord(recordName) {
        cy.get("button").contains("Add Customer").click();
        cy.get("input[ng-model='fName']").type(recordName);
        cy.get("input[ng-model='lName']").type(recordName);
        cy.get("input[ng-model='postCd']").type(recordName);
        cy.get("button[type=submit]").contains("Add Customer").click();
    }

    deleteRecord(recordName) {
        cy.get("button").contains("Customers").click();
        cy.get("td").contains("First Name").get("td[class='ng-binding']").contains(recordName);
        cy.contains(recordName).parent('tr').within(() => {
            cy.get('td').eq(1).contains(recordName)
            cy.get('td').eq(4).contains('button', 'Delete').click()
        })
    }

    getRecord(recordName) {
        return cy.get("td").contains("First Name").get("td[class='ng-binding']").contains(recordName);
    }

    addEmptyRecord() {
        cy.get("button").contains("Add Customer").click();
        cy.get("button[type=submit]").contains("Add Customer").click();
    }

    checkEmptyTooltip() {
        cy.get("button").contains("Add Customer").click();
        cy.get("input[ng-valid-parse]")
            .should("not.exist");
    }

    filterRecords(recordName) {
        cy.get("button").contains("Customers").click();
        cy.get("input[ng-model=searchCustomer]").type(recordName);
    }

    goHome() {
        cy.get("button").contains("Home").click();
    }

    checkHome() {
        return cy.get("button").contains("Bank Manager Login");
    }

    navigateAccount() {
        this.navigate();
        cy.get("button").contains("Open Account").click();
    }

    selectCustomer(value) {
        cy.get("select[ng-model=custId]").select(value);
    }

    selectCurrency(value) {
        cy.get("select[ng-model=currency]").select(value);
    }

    processAccount() {
        cy.get("button").contains("Process").click();
    }

    checkAccountAlert() {
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains('Account created successfully with account Number');
        })
    }
}

export default BankManagerPage;