import { loginFeatureKey, loginReducer } from './login.reducer';
import { statusFeatureKey, statusReducer } from './status.reducer';

export const authFeatureKey = 'auth';

export const authReducers = {
  [statusFeatureKey]: statusReducer,
  [loginFeatureKey]: loginReducer,
};

// export interface AuthState {
//   [fromAuth.statusFeatureKey]: fromAuth.State;
//   [fromLoginPage.loginPageFeatureKey]: fromLoginPage.State;
// }

// export const initialState: State = {};

// export const authReducer = createReducer(
//   initialState,

//   on(AuthActions.loadAuths, state => state),
//   on(AuthActions.loadAuthsSuccess, (state, action) => state),
//   on(AuthActions.loadAuthsFailure, (state, action) => state),
// );
