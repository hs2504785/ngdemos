import * as fromGuitar from './guitar.reducer';
import { selectGuitarState } from './guitar.selectors';

describe('Guitar Selectors', () => {
  it('should select the feature state', () => {
    const result = selectGuitarState({
      [fromGuitar.guitarFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
