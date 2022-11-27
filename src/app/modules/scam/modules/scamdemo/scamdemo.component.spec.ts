import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScamdemoComponent } from './scamdemo.component';

describe('ScamdemoComponent', () => {
  let component: ScamdemoComponent;
  let fixture: ComponentFixture<ScamdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScamdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScamdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
