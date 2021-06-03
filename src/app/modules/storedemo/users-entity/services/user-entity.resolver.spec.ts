import { TestBed } from '@angular/core/testing';

import { UserEntityResolver } from './user-entity.resolver';

describe('UserEntityResolver', () => {
  let resolver: UserEntityResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UserEntityResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
