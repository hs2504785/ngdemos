import { Action, createReducer, on } from '@ngrx/store';
import {
  booksFeatureKey,
  booksReducer,
  BooksStateInterface,
} from './books.reducer';
import {
  collectionFeatureKey,
  collectionReducer,
  CollectionStateInterface,
} from './collection.reducer';
import {
  searchFeatureKey,
  searchReducer,
  SearchStateInterface,
} from './search.reducer';

export const booksRootFeatureKey = 'books-store';

export const booksReducerStore = {
  [searchFeatureKey]: searchReducer,
  [booksFeatureKey]: booksReducer,
  [collectionFeatureKey]: collectionReducer,
};

export interface BooksRootStateInterface {
  [searchFeatureKey]: SearchStateInterface;
  [booksFeatureKey]: BooksStateInterface;
  [collectionFeatureKey]: CollectionStateInterface;
}
