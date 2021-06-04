import * as fromUserStore from './user-store.reducer';
import { selectUserStoreState } from './user-store.selectors';

describe('UserStore Selectors', () => {
  it('should select the feature state', () => {
    const result = selectUserStoreState({
      [fromUserStore.userStoreFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
