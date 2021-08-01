import { createAction, props } from '@ngrx/store';
import { GuitarInterface } from '../models/guitar.model';

export enum GuitarActionTypes {
  Add = '[Guitars] Add to cart',
  Remove = '[Guitars] Remove from cart',
  LoadItems = '[Guitars] Load items from server',
  LoadSuccess = '[Guitars] Load success',
}

export const addToCart = createAction(
  GuitarActionTypes.Add,
  props<{ payload: GuitarInterface }>(),
);
export const removeFromCart = createAction(
  GuitarActionTypes.Remove,
  props<{ payload: GuitarInterface }>(),
);
export const getItems = createAction(GuitarActionTypes.LoadItems);
export const loadItems = createAction(
  GuitarActionTypes.LoadSuccess,
  props<{ payload: GuitarInterface[] }>(),
);
