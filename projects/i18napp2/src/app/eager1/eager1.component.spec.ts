import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eager1Component } from './eager1.component';

describe('Eager1Component', () => {
  let component: Eager1Component;
  let fixture: ComponentFixture<Eager1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eager1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eager1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
