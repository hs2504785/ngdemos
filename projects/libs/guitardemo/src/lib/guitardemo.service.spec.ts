import { TestBed } from '@angular/core/testing';

import { GuitardemoService } from './guitardemo.service';

describe('GuitardemoService', () => {
  let service: GuitardemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuitardemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
