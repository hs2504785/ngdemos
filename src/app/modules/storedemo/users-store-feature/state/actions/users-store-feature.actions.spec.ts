import * as fromUsersStoreFeature from './users-store-feature.actions';

describe('loadUsersStoreFeatures', () => {
  it('should return an action', () => {
    expect(fromUsersStoreFeature.loadUsersStoreFeatures().type).toBe('[UsersStoreFeature] Load UsersStoreFeatures');
  });
});
