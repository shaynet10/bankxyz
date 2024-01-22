import { faker } from '@faker-js/faker';

import * as loginPage from '../support/commands/loginPage';
import * as managerPage from '../support/commands/managerPage';

describe('bank xyz', () => {
    const firstName = faker.lorem.words(2);
    const lastName = faker.lorem.words(2);
    const postCode = '12345';

    before(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    });
    

    it('bank manager login', () => {
        loginPage.getManagerLoginBtn().click();
        cy.waitForNetworkIdle(2000);
        managerPage.addCustomerDialog.addCustomer(firstName, lastName, postCode);
        managerPage.getCustomersTitleBtn().click();
        cy.waitForNetworkIdle(2000);
        managerPage.customersTable.filterCustomers(firstName);
        managerPage.customersTable.getTableLine()
            .should('include.text', firstName)
            .and('include.text', lastName)
            .and('include.text', postCode);
    });
});

