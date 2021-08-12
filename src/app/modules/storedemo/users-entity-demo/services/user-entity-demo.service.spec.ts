import { TestBed } from '@angular/core/testing';

import { UserEntityService } from './user-entity-demo.service';

describe('UserEntityService', () => {
  let service: UserEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
