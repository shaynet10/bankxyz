import * as managerPage from './index';

export const addCustomer = (firstName, lastName, postCode) => {
    managerPage.getAddCustomerTitleBtn().click();
    managerPage.getAddCustomerFirstNameField().type(firstName);
    managerPage.getAddCustomerLastNameField().type(lastName);
    managerPage.getAddCustomerPostalCodeField().type(postCode);
    managerPage.getAddCustomerButton().click();
};