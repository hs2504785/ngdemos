import { TestBed } from '@angular/core/testing';

import { UserStoreResolver } from './user-store.resolver';

describe('UserStoreResolver', () => {
  let resolver: UserStoreResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UserStoreResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
