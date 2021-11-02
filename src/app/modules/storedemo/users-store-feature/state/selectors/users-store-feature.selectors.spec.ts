import * as fromUsersStoreFeature from '../reducers/users-store-feature.reducer';
import { selectUsersStoreFeatureState } from './users-store-feature.selectors';

describe('UsersStoreFeature Selectors', () => {
  it('should select the feature state', () => {
    const result = selectUsersStoreFeatureState({
      [fromUsersStoreFeature.usersStoreFeatureFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
