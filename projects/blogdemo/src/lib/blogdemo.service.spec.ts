import { TestBed } from '@angular/core/testing';

import { BlogdemoService } from './blogdemo.service';

describe('BlogdemoService', () => {
  let service: BlogdemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogdemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
