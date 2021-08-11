import { TestBed } from '@angular/core/testing';

import { UsersCsService } from './users-cs.service';

describe('UsersCsService', () => {
  let service: UsersCsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersCsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
