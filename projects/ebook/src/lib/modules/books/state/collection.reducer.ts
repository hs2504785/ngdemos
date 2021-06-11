import { Action, createReducer, on } from '@ngrx/store';
import {
  addBook,
  addBookFailure,
  enter,
  loadBooksSuccess,
  removeBook,
  removeBookFailure,
} from './books.actions';

export const collectionFeatureKey = 'collection';

export interface CollectionStateInterface {
  loaded: boolean;
  loading: boolean;
  ids: string[];
}

const initialState: CollectionStateInterface = {
  loaded: false,
  loading: false,
  ids: [],
};

export const collectionReducer = createReducer(
  initialState,
  on(enter, state => ({
    ...state,
    loading: true,
  })),
  on(loadBooksSuccess, (state, { books }) => ({
    loaded: true,
    loading: false,
    ids: books.map(book => book.id),
  })),
  /**
   * Optimistically add book to collection.
   * If this succeeds there's nothing to do.
   * If this fails we revert state by removing the book.
   *
   * `on` supports handling multiple types of actions
   */
  on(addBook, removeBookFailure, (state, { book }) => {
    if (state.ids.indexOf(book.id) > -1) {
      return state;
    }
    return {
      ...state,
      ids: [...state.ids, book.id],
    };
  }),
  /**
   * Optimistically remove book from collection.
   * If addBook fails, we "undo" adding the book.
   */
  on(removeBook, addBookFailure, (state, { book }) => ({
    ...state,
    ids: state.ids.filter(id => id !== book.id),
  })),
);

// export const getLoaded = (state: State) => state.loaded;

// export const getLoading = (state: State) => state.loading;

// export const getIds = (state: State) => state.ids;
