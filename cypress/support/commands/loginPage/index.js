import * as selectors from './selectors';

export const getManagerLoginBtn = () => cy.get(selectors.managerLoginBtn).first();
export const getCustomerLoginBtn = () => cy.get(selectors.customerLoginBtn).first();
