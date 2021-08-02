import { TestBed } from '@angular/core/testing';

import { LongRunningService } from './long-running.service';

describe('LongRunningService', () => {
  let service: LongRunningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LongRunningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
