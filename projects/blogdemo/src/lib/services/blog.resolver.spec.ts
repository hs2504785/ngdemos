import { TestBed } from '@angular/core/testing';

import { BlogResolver } from './blog.resolver';

describe('BlogResolver', () => {
  let resolver: BlogResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BlogResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
