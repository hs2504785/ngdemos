import { TestBed } from '@angular/core/testing';

import { UserDataResolver } from './user-data.resolver';

describe('UserDataResolver', () => {
  let resolver: UserDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UserDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
