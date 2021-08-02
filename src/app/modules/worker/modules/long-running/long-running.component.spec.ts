import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongRunningComponent } from './long-running.component';

describe('LongRunningComponent', () => {
  let component: LongRunningComponent;
  let fixture: ComponentFixture<LongRunningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongRunningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongRunningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
