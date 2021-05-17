import { TestBed } from '@angular/core/testing';

import { IntrDataService } from './intr-data.service';

describe('IntrDataService', () => {
  let service: IntrDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntrDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
