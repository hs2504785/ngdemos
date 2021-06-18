import { TestBed } from '@angular/core/testing';

import { WorkerdemoService } from './workerdemo.service';

describe('WorkerdemoService', () => {
  let service: WorkerdemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkerdemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
