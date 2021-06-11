import { Action, createReducer, on } from '@ngrx/store';
import { searchBooks, searchFailure, searchSuccess } from './books.actions';

export const searchFeatureKey = 'search';

export interface SearchStateInterface {
  ids: string[];
  loading: boolean;
  error: string;
  query: string;
}

const initialState: SearchStateInterface = {
  ids: [],
  loading: false,
  error: '',
  query: '',
};

export const searchReducer = createReducer(
  initialState,
  on(searchBooks, (state, { query }) => {
    return query === ''
      ? {
          ids: [],
          loading: false,
          error: '',
          query,
        }
      : {
          ...state,
          loading: true,
          error: '',
          query,
        };
  }),
  on(searchSuccess, (state, { books }) => ({
    ids: books.map(book => book.id),
    loading: false,
    error: '',
    query: state.query,
  })),
  on(searchFailure, (state, { errorMsg }) => ({
    ...state,
    loading: false,
    error: errorMsg,
  })),
);

// export const getIds = (state: State) => state.ids;

// export const getQuery = (state: State) => state.query;

// export const getLoading = (state: State) => state.loading;

// export const getError = (state: State) => state.error;
