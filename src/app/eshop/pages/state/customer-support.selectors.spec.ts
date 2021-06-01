import * as fromCustomerSupport from './customer-support.reducer';
import { selectCustomerSupportState } from './customer-support.selectors';

describe('CustomerSupport Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCustomerSupportState({
      [fromCustomerSupport.customerSupportFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
