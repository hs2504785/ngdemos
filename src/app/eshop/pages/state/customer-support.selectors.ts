import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomerSupport from './customer-support.reducer';

export const selectCustomerSupportState =
  createFeatureSelector<fromCustomerSupport.CustomerSupportInterface>(
    fromCustomerSupport.customerSupportFeatureKey,
  );

export const selectName = createSelector(
  selectCustomerSupportState,
  (state: fromCustomerSupport.CustomerSupportInterface) => state.name,
);

export const selectIsSentSuccess = createSelector(
  selectCustomerSupportState,
  (state: fromCustomerSupport.CustomerSupportInterface) => state.isSentSuccess,
);
