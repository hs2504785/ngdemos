import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eager2Component } from './eager2.component';

describe('Eager2Component', () => {
  let component: Eager2Component;
  let fixture: ComponentFixture<Eager2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eager2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eager2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
