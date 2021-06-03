import { TestBed } from '@angular/core/testing';

import { UcardResolver } from './ucard.resolver';

describe('UcardResolver', () => {
  let resolver: UcardResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UcardResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
