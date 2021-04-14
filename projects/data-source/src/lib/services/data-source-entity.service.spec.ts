import { TestBed } from '@angular/core/testing';

import { DataSourceEntityService } from './data-source-entity.service';

describe('DataSourceEntityService', () => {
  let service: DataSourceEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSourceEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
