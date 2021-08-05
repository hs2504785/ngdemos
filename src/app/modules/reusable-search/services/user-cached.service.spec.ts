import { TestBed } from '@angular/core/testing';

import { UserCachedService } from './user-cached.service';

describe('UserCachedService', () => {
  let service: UserCachedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCachedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
