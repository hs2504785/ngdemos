import { TestBed } from '@angular/core/testing';

import { HttpCachingService } from './http-caching.service';

describe('HttpCachingService', () => {
  let service: HttpCachingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCachingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
