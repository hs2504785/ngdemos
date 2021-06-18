import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerdemoComponent } from './workerdemo.component';

describe('WorkerdemoComponent', () => {
  let component: WorkerdemoComponent;
  let fixture: ComponentFixture<WorkerdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
