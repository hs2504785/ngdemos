import { Action, createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';
import { TodoState } from '../models/todo-state.interface';

export const todoFeatureKey = 'todo';

export const initialState: TodoState = {
  data: null,
  isLoading: false,
  error: null,
  loaded: false,
};

export const reducer = createReducer(
  initialState,

  on(TodoActions.loadTodos, (state): TodoState => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(TodoActions.loadTodosSuccess, (state, action): TodoState => {
    return {
      ...state,
      isLoading: false,
      data: action.todos,
      loaded: true,
    };
  }),
  on(TodoActions.loadTodosFailure, (state, action) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
);

export function todoReducer(state: TodoState | undefined, action: Action) {
  return reducer(state, action);
}
