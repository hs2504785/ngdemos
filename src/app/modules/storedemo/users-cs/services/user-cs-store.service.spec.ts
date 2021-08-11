import { TestBed } from '@angular/core/testing';

import { UserCsStoreService } from './user-cs-store.service';

describe('UserCsStoreService', () => {
  let service: UserCsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
