import * as fromPost from './post.reducer';
import { selectPostState } from './post.selectors';

describe('Post Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPostState({
      [fromPost.postFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
