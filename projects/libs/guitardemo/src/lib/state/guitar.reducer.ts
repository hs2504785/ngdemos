import { Action, createReducer, on } from '@ngrx/store';
import * as GuitarActions from './guitar.actions';

export const guitarFeatureKey = 'guitar';

export interface GuitarStateInterface {
  items: any[];
  cart: any[];
}

export const initialState: GuitarStateInterface = {
  items: [],
  cart: [],
};

export const guitarReducer = createReducer(
  initialState,

  on(GuitarActions.loadItems, (state, action): GuitarStateInterface => {
    return {
      ...state,
      items: [...action.payload],
    };
  }),
  on(GuitarActions.addToCart, (state, action) => {
    return {
      ...state,
      cart: [...state.cart, action.payload],
    };
  }),
  on(GuitarActions.removeFromCart, (state, action) => {
    return {
      ...state,
      cart: [...state.cart.filter(item => item.name !== action.payload.name)],
    };
  }),
);
