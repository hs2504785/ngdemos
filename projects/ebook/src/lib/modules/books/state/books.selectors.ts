import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookInterface } from '../models/book.interface';
import {
  booksRootFeatureKey,
  BooksRootStateInterface,
} from './books-root.reducer';
import {
  bookAdapter,
  booksFeatureKey,
  BooksStateInterface,
} from './books.reducer';
import { CollectionStateInterface } from './collection.reducer';
import { SearchStateInterface } from './search.reducer';

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const selectBooksRootFeature =
  createFeatureSelector<BooksRootStateInterface>(booksRootFeatureKey);

export const selectBooksFeature = createSelector(
  selectBooksRootFeature,
  state => state.books,
);
/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them usable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */

export const selectSelectedBookId = createSelector(
  selectBooksFeature,
  (state: BooksStateInterface) => state.selectedBookId,
);

/**
 * Adapters created with @ngrx/entity generate
 * commonly used selector functions including
 * getting all ids in the record set, a dictionary
 * of the records by id, an array of records and
 * the total number of records. This reduces boilerplate
 * in selecting records from the entity state.
 */
export const {
  selectIds: selectBookIds,
  selectEntities: selectBookEntities,
  selectAll: selectAllBooks,
  selectTotal: selectTotalBooks,
} = bookAdapter.getSelectors(selectBooksFeature);

export const selectSelectedBook = createSelector(
  selectBookEntities,
  selectSelectedBookId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  },
);

/**
 * Just like with the books selectors, we also have to compose the search
 * reducer's and collection reducer's selectors.
 */
export const selectSearchState = createSelector(
  selectBooksRootFeature,
  state => state.search,
);

export const selectSearchBookIds = createSelector(
  selectSearchState,
  (state: SearchStateInterface) => state.ids,
);

export const selectSearchQuery = createSelector(
  selectSearchState,
  (state: SearchStateInterface) => state.query,
);

export const selectSearchLoading = createSelector(
  selectSearchState,
  (state: SearchStateInterface) => state.loading,
);

export const selectSearchError = createSelector(
  selectSearchState,
  (state: SearchStateInterface) => state.error,
);

/**
 * Some selector functions create joins across parts of state. This selector
 * composes the search result IDs to return an array of books in the store.
 */
export const selectSearchResults = createSelector(
  selectBookEntities,
  selectSearchBookIds,
  (books, searchIds) => {
    return searchIds
      .map(id => books[id])
      .filter((book): book is BookInterface => book != null);
  },
);

export const selectCollectionState = createSelector(
  selectBooksRootFeature,
  state => state.collection,
);

export const selectCollectionLoaded = createSelector(
  selectCollectionState,
  (state: CollectionStateInterface) => state.loaded,
);
export const getCollectionLoading = createSelector(
  selectCollectionState,
  (state: CollectionStateInterface) => state.loading,
);
export const selectCollectionBookIds = createSelector(
  selectCollectionState,
  (state: CollectionStateInterface) => state.ids,
);

export const selectBookCollection = createSelector(
  selectBookEntities,
  selectCollectionBookIds,
  (entities, ids) => {
    return ids
      .map(id => entities[id])
      .filter((book): book is BookInterface => book != null);
  },
);

export const isSelectedBookInCollection = createSelector(
  selectCollectionBookIds,
  selectSelectedBookId,
  (ids, selected) => {
    return !!selected && ids.indexOf(selected) > -1;
  },
);
