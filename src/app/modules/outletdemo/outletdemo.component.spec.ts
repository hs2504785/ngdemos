import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletdemoComponent } from './outletdemo.component';

describe('OutletdemoComponent', () => {
  let component: OutletdemoComponent;
  let fixture: ComponentFixture<OutletdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutletdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutletdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
