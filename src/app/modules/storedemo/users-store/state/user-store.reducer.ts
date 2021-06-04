import { createReducer, on } from '@ngrx/store';
import { UserStoreStateInterface } from '../models/user-store-state.interface';
import * as UserStoreActions from './user-store.actions';

export const userStoreFeatureKey = 'userStore';

export const initialState: UserStoreStateInterface = {
  data: null,
  isLoading: false,
  error: null,
  loaded: false,
};

export const userStoreReducer = createReducer(
  initialState,

  on(UserStoreActions.loadStoreUsers, (state): UserStoreStateInterface => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(
    UserStoreActions.loadStoreUsersSuccess,
    (state, action): UserStoreStateInterface => {
      return {
        ...state,
        isLoading: false,
        data: action.users,
        loaded: true,
      };
    },
  ),
  on(UserStoreActions.loadStoreUsersFailure, (state, action) => {
    return {
      ...state,
      isLoading: false,
    };
  }),

  // // Add
  // on(
  //   addTodoAction,
  //   (state): TodoStateInterface => ({
  //     ...state,
  //     isLoading: true,
  //   }),
  // ),
  // on(
  //   addTodoSuccessAction,
  //   (state, action): TodoStateInterface => ({
  //     ...state,
  //     isLoading: false,
  //     data: [action.todo, ...state.data],
  //   }),
  // ),

  // on(
  //   addTodoFailureAction,
  //   (state): TodoStateInterface => ({
  //     ...state,
  //     isLoading: false,
  //   }),
  // ),

  // on(
  //   editTodoAction,
  //   (state): TodoStateInterface => ({
  //     ...state,
  //     isLoading: true,
  //   }),
  // ),
  // // Another way to update post
  // // on(
  // //   editPostSuccessAction,
  // //   (state, action): PostStateInterface => {
  // //     const index = state.data.findIndex((h) => h.id === action.post.id);
  // //     let updatedState = [...state.data];
  // //     if (index >= 0) {
  // //       updatedState = [
  // //         ...state.data.slice(0, index),
  // //         action.post,
  // //         ...state.data.slice(index + 1),
  // //       ];
  // //     }

  // //     return {
  // //       ...state,
  // //       isLoading: false,
  // //       data: updatedState,
  // //     };
  // //   }
  // // ),
  // on(editTodoSuccessAction, (state, action): TodoStateInterface => {
  //   const updatedTodo = state.data.map(todo =>
  //     todo.id === action.todo.id ? action.todo : todo,
  //   );

  //   return {
  //     ...state,
  //     isLoading: false,
  //     data: updatedTodo,
  //   };
  // }),
  // on(
  //   editTodoFailureAction,
  //   (state): TodoStateInterface => ({
  //     ...state,
  //     isLoading: false,
  //   }),
  // ),

  // // Delete
  // on(deleteTodoAction, (state, action): TodoStateInterface => {
  //   const todos = state.data.filter(h => h.id !== action.todoId);
  //   return {
  //     ...state,
  //     data: todos,
  //   };
  // }),

  // on(
  //   deleteTodoSuccessAction,
  //   (state): TodoStateInterface => ({
  //     ...state,
  //     isLoading: false,
  //   }),
  // ),

  // on(
  //   deleteTodoFailureAction,
  //   (state): TodoStateInterface => ({
  //     ...state,
  //     isLoading: false,
  //   }),
  // ),
);
