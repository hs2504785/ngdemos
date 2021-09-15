import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgChallangeComponent } from './ng-challange.component';

describe('NgChallangeComponent', () => {
  let component: NgChallangeComponent;
  let fixture: ComponentFixture<NgChallangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgChallangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgChallangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
