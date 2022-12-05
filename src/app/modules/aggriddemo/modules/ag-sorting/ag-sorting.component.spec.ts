import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgSortingComponent } from './ag-sorting.component';

describe('AgSortingComponent', () => {
  let component: AgSortingComponent;
  let fixture: ComponentFixture<AgSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgSortingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
