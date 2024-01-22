import * as managerPage from './index';
import * as selectors from './selectors';

export const getTableLine = () => cy.get(selectors.tableLine);
export const filterCustomers = (filterText) => {
    managerPage.getSearchCustomerField().clear().type(filterText);
};