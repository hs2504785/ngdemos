import * as fromCustomerSupport from './customer-support.actions';

describe('loadCustomerSupports', () => {
  it('should return an action', () => {
    expect(fromCustomerSupport.loadCustomerSupports().type).toBe('[CustomerSupport] Load CustomerSupports');
  });
});
