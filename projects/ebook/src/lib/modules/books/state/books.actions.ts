import { createAction, props } from '@ngrx/store';
import { BookInterface } from '../models/book.interface';

export const loadBook = createAction(
  '[Book Exists Guard] Load Book',
  props<{ book: BookInterface }>(),
);

/**
 * Load Collection Actions
 */

export const enter = createAction('[Collection Page] Enter');

export const loadBooksSuccess = createAction(
  '[Collection/API] Load Books Success',
  props<{ books: BookInterface[] }>(),
);

export const loadBooksFailure = createAction(
  '[Collection/API] Load Books Failure',
  props<{ error: any }>(),
);

export const searchBooks = createAction(
  '[Find Book Page] Search Books',
  props<{ query: string }>(),
);

export const searchSuccess = createAction(
  '[Books/API] Search Success',
  props<{ books: BookInterface[] }>(),
);

export const searchFailure = createAction(
  '[Books/API] Search Failure',
  props<{ errorMsg: string }>(),
);

export const selectBook = createAction(
  '[View Book Page] Select Book',
  props<{ id: string }>(),
);

/**
 * Add Book to Collection Actions
 */
export const addBookSuccess = createAction(
  '[Collection/API] Add Book Success',
  props<{ book: BookInterface }>(),
);

export const addBookFailure = createAction(
  '[Collection/API] Add Book Failure',
  props<{ book: BookInterface }>(),
);

/**
 * Remove Book from Collection Actions
 */
export const removeBookSuccess = createAction(
  '[Collection/API] Remove Book Success',
  props<{ book: BookInterface }>(),
);

export const removeBookFailure = createAction(
  '[Collection/API] Remove Book Failure',
  props<{ book: BookInterface }>(),
);

/**
 * Add Book to Collection Action
 */
export const addBook = createAction(
  '[Selected Book Page] Add Book',
  props<{ book: BookInterface }>(),
);

/**
 * Remove Book from Collection Action
 */
export const removeBook = createAction(
  '[Selected Book Page] Remove Book',
  props<{ book: BookInterface }>(),
);
