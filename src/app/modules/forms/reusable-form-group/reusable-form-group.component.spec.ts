import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableFormGroupComponent } from './reusable-form-group.component';

describe('ReusableFormGroupComponent', () => {
  let component: ReusableFormGroupComponent;
  let fixture: ComponentFixture<ReusableFormGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReusableFormGroupComponent]
    });
    fixture = TestBed.createComponent(ReusableFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
