import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseCompLogicComponent } from './reuse-comp-logic.component';

describe('ReuseCompLogicComponent', () => {
  let component: ReuseCompLogicComponent;
  let fixture: ComponentFixture<ReuseCompLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReuseCompLogicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuseCompLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
