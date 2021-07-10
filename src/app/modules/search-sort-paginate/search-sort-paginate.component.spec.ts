import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSortPaginateComponent } from './search-sort-paginate.component';

describe('SearchSortPaginateComponent', () => {
  let component: SearchSortPaginateComponent;
  let fixture: ComponentFixture<SearchSortPaginateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSortPaginateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSortPaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
