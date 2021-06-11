import * as fromLogout from './logout.actions';

describe('loadLogouts', () => {
  it('should return an action', () => {
    expect(fromLogout.loadLogouts().type).toBe('[Logout] Load Logouts');
  });
});
