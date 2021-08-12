import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { UserEntityDemoInterface } from '../models/user-entity-demo-interface';
import * as UserEntityDemoActions from './user-entity-demo.actions';
export const userEntityDemoFeatureKey = 'userEntityDemo';

export interface UserEntityDemoStateInterface
  extends EntityState<UserEntityDemoInterface> {
  loaded: boolean;
  selectedUserId: number;
  // additional entities state properties
}

export const adapter: EntityAdapter<UserEntityDemoInterface> =
  createEntityAdapter<UserEntityDemoInterface>({
    // sortComparer: sort,
  });

export const initialState: UserEntityDemoStateInterface =
  adapter.getInitialState({
    loaded: false,
    selectedUserId: 1,
    // additional entity state properties
  });

export const userEntityDemoReducer = createReducer(
  initialState,
  on(
    UserEntityDemoActions.loadEntityDemoUsersSuccess,
    (state, action): UserEntityDemoStateInterface =>
      adapter.setAll(action.users, { ...state, loaded: true }),
  ),
  // on(UserEntityDemoActions.loadEntityUsersFailure, (state, action) => {
  //   return {
  //     ...state,
  //     isLoading: false,
  //   };
  // }),

  // Add
  // on(
  //   UserEntityDemoActions.addEntityUserAction,
  //   (state): UserEntityDemoStateInterface => ({
  //     ...state,
  //     isLoading: true,
  //   }),
  // ),
  on(
    UserEntityDemoActions.addEntityDemoUserSuccessAction,
    (state, action): UserEntityDemoStateInterface =>
      adapter.addOne(action.user, state),
  ),

  // on(
  //   UserEntityDemoActions.addEntityUserFailureAction,
  //   (state): UserEntityDemoStateInterface => ({
  //     ...state,
  //     isLoading: false,
  //   }),
  // ),

  on(
    UserEntityDemoActions.editEntityDemoUserAction,
    (state, action): UserEntityDemoStateInterface =>
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
  //   UserEntityDemoActions.editEntityUserSuccessAction,
  //   (state, action): UserEntityDemoStateInterface => {
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
  //   UserEntityDemoActions.editEntityUserFailureAction,
  //   (state): UserEntityDemoStateInterface => ({
  //     ...state,
  //     isLoading: false,
  //   }),
  // ),

  // Delete
  on(
    UserEntityDemoActions.deleteEntityDemoUserAction,
    (state, action): UserEntityDemoStateInterface =>
      adapter.removeOne(action.id, state),
  ),

  // on(
  //   UserEntityDemoActions.deleteEntityUserSuccessAction,
  //   (state): UserEntityDemoStateInterface => ({
  //     ...state,
  //     isLoading: false,
  //   }),
  // ),

  on(
    UserEntityDemoActions.setUserIdAction,
    (state, action): UserEntityDemoStateInterface => ({
      ...state,
      selectedUserId: action.id,
    }),
  ),
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
