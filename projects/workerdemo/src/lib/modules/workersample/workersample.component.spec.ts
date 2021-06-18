import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersampleComponent } from './workersample.component';

describe('WorkersampleComponent', () => {
  let component: WorkersampleComponent;
  let fixture: ComponentFixture<WorkersampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkersampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
