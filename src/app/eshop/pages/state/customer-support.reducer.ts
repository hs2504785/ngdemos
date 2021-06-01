import { createReducer, on } from '@ngrx/store';
import * as CustomerSupportActions from './customer-support.actions';

export const customerSupportFeatureKey = 'customerSupport';

export interface CustomerSupportInterface {
  name: string;
  isSentSuccess: boolean;
}

export const initialState: CustomerSupportInterface = {
  name: null,
  isSentSuccess: null,
};

export const customerSupportReducer = createReducer(
  initialState,

  on(CustomerSupportActions.sendingCustomerSupportMessage, (state, action) => {
    return {
      ...state,
      name: action.data.name,
    };
  }),
  on(CustomerSupportActions.sendMessageStatus, (state, action) => {
    return {
      ...state,
      isSentSuccess: action.isSentSuccess,
    };
  }),
  on(CustomerSupportActions.clearForm, state => {
    return {
      ...state,
      name: null,
      isSentSuccess: null,
    };
  }),
);
