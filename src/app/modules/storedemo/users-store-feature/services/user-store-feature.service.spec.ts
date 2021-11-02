import { TestBed } from '@angular/core/testing';

import { UserStoreFeatureService } from './user-store-feature.service';

describe('UserStoreFeatureService', () => {
  let service: UserStoreFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserStoreFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
