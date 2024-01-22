import * as selectors from './selectors';
export * as addCustomerDialog from './addCustomerDialog';
export * as customersTable from './customersTable';

export const getAddCustomerTitleBtn = () => cy.get(selectors.addCustomerTitleBtn);
export const getOpenAccountTitleBtn = () => cy.get(selectors.openAccountTitleBtn);
export const getCustomersTitleBtn = () => cy.get(selectors.customersTitleBtn);
export const getAddCustomerFirstNameField = () => cy.get(selectors.addCustomerFirstNameField);
export const getAddCustomerLastNameField = () => cy.get(selectors.addCustomerLastNameField);
export const getAddCustomerPostalCodeField = () => cy.get(selectors.addCustomerPostalCodeField);
export const getAddCustomerButton = () => cy.get(selectors.addCustomerButton);
export const getSearchCustomerField = () => cy.get(selectors.searchCustomerField);
