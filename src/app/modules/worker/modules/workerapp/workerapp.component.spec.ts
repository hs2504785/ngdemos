import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerappComponent } from './workerapp.component';

describe('WorkerappComponent', () => {
  let component: WorkerappComponent;
  let fixture: ComponentFixture<WorkerappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
