import { TestBed } from '@angular/core/testing';

import { IdbDemoService } from './idb-demo.service';

describe('IdbDemoService', () => {
  let service: IdbDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdbDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
