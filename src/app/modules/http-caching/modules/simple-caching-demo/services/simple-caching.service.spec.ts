import { TestBed } from '@angular/core/testing';

import { SimpleCachingService } from './simple-caching.service';

describe('SimpleCachingService', () => {
  let service: SimpleCachingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleCachingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
