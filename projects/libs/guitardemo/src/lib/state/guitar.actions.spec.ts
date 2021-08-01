import * as fromGuitar from './guitar.actions';

describe('guitarGuitars', () => {
  it('should return an action', () => {
    expect(fromGuitar.guitarGuitars().type).toBe('[Guitar] Guitar Guitars');
  });
});
