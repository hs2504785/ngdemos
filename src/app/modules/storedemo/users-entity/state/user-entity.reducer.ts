import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { UserEntityInterface } from '../models/user-entity-interface';
import * as UserEntityActions from './user-entity.actions';

export const userEntityFeatureKey = 'userEntity';

export interface UserEntityStateInterface
  extends EntityState<UserEntityInterface> {
  loaded: boolean;
  // additional entities state properties
}

export const adapter: EntityAdapter<UserEntityInterface> =
  createEntityAdapter<UserEntityInterface>({
    // sortComparer: sort,
  });

export const initialState: UserEntityStateInterface = adapter.getInitialState({
  loaded: false,
  // additional entity state properties
});

export const userEntityReducer = createReducer(
  initialState,
  on(
    UserEntityActions.loadEntityUsersSuccess,
    (state, action): UserEntityStateInterface =>
      adapter.setAll(action.users, { ...state, loaded: true }),
  ),
  // on(UserEntityActions.loadEntityUsersFailure, (state, action) => {
  //   return {
  //     ...state,
  //     isLoading: false,
  //   };
  // }),

  // Add
  // on(
  //   UserEntityActions.addEntityUserAction,
  //   (state): UserEntityStateInterface => ({
  //     ...state,
  //     isLoading: true,
  //   }),
  // ),
  on(
    UserEntityActions.addEntityUserSuccessAction,
    (state, action): UserEntityStateInterface =>
      adapter.addOne(action.user, state),
  ),

  // on(
  //   UserEntityActions.addEntityUserFailureAction,
  //   (state): UserEntityStateInterface => ({
  //     ...state,
  //     isLoading: false,
  //   }),
  // ),

  on(
    UserEntityActions.editEntityUserAction,
    (state, action): UserEntityStateInterface =>
      adapter.updateOne(action.user, state),
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
  // on(
  //   UserEntityActions.editEntityUserSuccessAction,
  //   (state, action): UserEntityStateInterface => {
  //     const updatedUser = state.data.map(user =>
  //       user.id === action.user.id ? action.user : user,
  //     );

  //     return {
  //       ...state,
  //       isLoading: false,
  //       data: updatedUser,
  //     };
  //   },
  // ),
  // on(
  //   UserEntityActions.editEntityUserFailureAction,
  //   (state): UserEntityStateInterface => ({
  //     ...state,
  //     isLoading: false,
  //   }),
  // ),

  // Delete
  on(
    UserEntityActions.deleteEntityUserAction,
    (state, action): UserEntityStateInterface =>
      adapter.removeOne(action.id, state),
  ),

  // on(
  //   UserEntityActions.deleteEntityUserSuccessAction,
  //   (state): UserEntityStateInterface => ({
  //     ...state,
  //     isLoading: false,
  //   }),
  // ),

  // on(
  //   UserEntityActions.deleteEntityUserFailureAction,
  //   (state): UserEntityStateInterface => ({
  //     ...state,
  //     isLoading: false,
  //   }),
  // ),
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
