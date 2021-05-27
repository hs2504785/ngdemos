import { Dictionary } from '@ngrx/entity';

import { User } from '../types';
import { mockUsers } from './mock.users';
import { selectCurrentUser } from './user.selectors';

describe('User Selectors', () => {
  describe('selectCurrentUser', () => {
    let entities: Dictionary<User>;

    beforeEach(() => {
      entities = { 1: mockUsers[0], 2: mockUsers[1] };
    });

    it('should handle having entities and id', () => {
      expect(selectCurrentUser.projector(entities, 2)).toBe(
        mockUsers[1]
      );
    });

    it('should handle id being unready', () => {
      expect(
        selectCurrentUser.projector(entities, undefined)
      ).toBeUndefined();
    });
  });
});
