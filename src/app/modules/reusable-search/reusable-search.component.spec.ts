import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableSearchComponent } from './reusable-search.component';

describe('ReusableSearchComponent', () => {
  let component: ReusableSearchComponent;
  let fixture: ComponentFixture<ReusableSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
