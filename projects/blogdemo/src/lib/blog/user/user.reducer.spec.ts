import { mockUsers } from './mock.users';
import * as UserActions from './user.actions';
import { initialState, reducer } from './user.reducer';

describe('User Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  it('should load users', () => {
    const result = reducer(
      initialState,
      UserActions.loadUsersSuccess({ users: mockUsers })
    );

    expect(result.ids).toEqual([1, 2]);
    expect(result.entities).toEqual({
      1: mockUsers[0],
      2: mockUsers[1]
    });
  });
});
