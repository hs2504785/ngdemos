import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazydemoComponent } from './lazydemo.component';

describe('LazydemoComponent', () => {
  let component: LazydemoComponent;
  let fixture: ComponentFixture<LazydemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazydemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazydemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
