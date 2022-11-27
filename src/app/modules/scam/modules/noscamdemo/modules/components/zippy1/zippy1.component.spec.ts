import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zippy1Component } from './zippy1.component';

describe('Zippy1Component', () => {
  let component: Zippy1Component;
  let fixture: ComponentFixture<Zippy1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zippy1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zippy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
