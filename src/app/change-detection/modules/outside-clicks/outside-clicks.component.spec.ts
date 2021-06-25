import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideClicksComponent } from './outside-clicks.component';

describe('OutsideClicksComponent', () => {
  let component: OutsideClicksComponent;
  let fixture: ComponentFixture<OutsideClicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutsideClicksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
