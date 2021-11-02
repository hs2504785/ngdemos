import { TestBed } from '@angular/core/testing';

import { UserStoreFeatureResolverService } from './user-store-feature-resolver.service';

describe('UserStoreFeatureResolverService', () => {
  let service: UserStoreFeatureResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserStoreFeatureResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
