import { Action, createReducer, on } from '@ngrx/store';
import { TodoStateInterface } from '../models/todo-state.interface';
import {
  addTodoAction,
  addTodoFailureAction,
  addTodoSuccessAction,
  deleteTodoAction,
  deleteTodoFailureAction,
  deleteTodoSuccessAction,
  editTodoAction,
  editTodoFailureAction,
  editTodoSuccessAction,
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
} from './todo.actions';

export const todoFeatureKey = 'todo';

export const initialState: TodoStateInterface = {
  data: null,
  isLoading: false,
  error: null,
  loaded: false,
};

export const reducer = createReducer(
  initialState,

  on(loadTodos, (state): TodoStateInterface => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(loadTodosSuccess, (state, action): TodoStateInterface => {
    return {
      ...state,
      isLoading: false,
      data: action.todos,
      loaded: true,
    };
  }),
  on(loadTodosFailure, (state, action) => {
    return {
      ...state,
      isLoading: false,
    };
  }),

  // Add
  on(
    addTodoAction,
    (state): TodoStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),
  on(
    addTodoSuccessAction,
    (state, action): TodoStateInterface => ({
      ...state,
      isLoading: false,
      data: [action.todo, ...state.data],
    }),
  ),

  on(
    addTodoFailureAction,
    (state): TodoStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),

  on(
    editTodoAction,
    (state): TodoStateInterface => ({
      ...state,
      isLoading: true,
    }),
  ),
  // Another way to update post
  // on(
  //   editPostSuccessAction,
  //   (state, action): PostStateInterface => {
  //     const index = state.data.findIndex((h) => h.id === action.post.id);
  //     let updatedState = [...state.data];
  //     if (index >= 0) {
  //       updatedState = [
  //         ...state.data.slice(0, index),
  //         action.post,
  //         ...state.data.slice(index + 1),
  //       ];
  //     }

  //     return {
  //       ...state,
  //       isLoading: false,
  //       data: updatedState,
  //     };
  //   }
  // ),
  on(editTodoSuccessAction, (state, action): TodoStateInterface => {
    const updatedTodo = state.data.map(todo =>
      todo.id === action.todo.id ? action.todo : todo,
    );

    return {
      ...state,
      isLoading: false,
      data: updatedTodo,
    };
  }),
  on(
    editTodoFailureAction,
    (state): TodoStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),

  // Delete
  on(deleteTodoAction, (state, action): TodoStateInterface => {
    const todos = state.data.filter(h => h.id !== action.todoId);
    return {
      ...state,
      data: todos,
    };
  }),

  on(
    deleteTodoSuccessAction,
    (state): TodoStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),

  on(
    deleteTodoFailureAction,
    (state): TodoStateInterface => ({
      ...state,
      isLoading: false,
    }),
  ),
);

export function todoReducer(
  state: TodoStateInterface | undefined,
  action: Action,
) {
  return reducer(state, action);
}
