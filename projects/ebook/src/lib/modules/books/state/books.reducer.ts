import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as BooksActions from './books.actions';
import { BookInterface } from '../models/book.interface';
import { selectBook } from './books.actions';

export const booksFeatureKey = 'books';

/**
 * @ngrx/entity provides a predefined interface for handling
 * a structured dictionary of records. This interface
 * includes an array of ids, and a dictionary of the provided
 * model type by id. This interface is extended to include
 * any additional interface properties.
 */
export interface BooksStateInterface extends EntityState<BookInterface> {
  selectedBookId: string | null;
}

/**
 * createEntityAdapter creates an object of many helper
 * functions for single or multiple operations
 * against the dictionary of records. The configuration
 * object takes a record id selector function and
 * a sortComparer option which is set to a compare
 * function if the records are to be sorted.
 */
export const bookAdapter: EntityAdapter<BookInterface> =
  createEntityAdapter<BookInterface>({
    selectId: (book: BookInterface) => book.id,
    sortComparer: false,
  });

/**
 * getInitialState returns the default initial state
 * for the generated entity state. Initial state
 * additional properties can also be defined.
 */
export const initialState: BooksStateInterface = bookAdapter.getInitialState({
  selectedBookId: null,
});

export const booksReducer = createReducer(
  initialState,
  /**
   * The addMany function provided by the created adapter
   * adds many records to the entity dictionary
   * and returns a new state including those records. If
   * the collection is to be sorted, the adapter will
   * sort each record upon entry into the sorted array.
   */
  on(
    BooksActions.searchSuccess,
    BooksActions.loadBooksSuccess,
    (state, { books }) => bookAdapter.addMany(books, state),
  ),
  /**
   * The addOne function provided by the created adapter
   * adds one record to the entity dictionary
   * and returns a new state including that records if it doesn't
   * exist already. If the collection is to be sorted, the adapter will
   * insert the new record into the sorted array.
   */
  on(BooksActions.loadBook, (state, { book }) =>
    bookAdapter.addOne(book, state),
  ),
  on(selectBook, (state, { id }) => ({
    ...state,
    selectedBookId: id,
  })),
);

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const selectId = (state: BooksStateInterface) => state.selectedBookId;
