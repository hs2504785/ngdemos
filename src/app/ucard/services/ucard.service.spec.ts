import { TestBed } from '@angular/core/testing';

import { UcardService } from './ucard.service';

describe('UcardService', () => {
  let service: UcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
