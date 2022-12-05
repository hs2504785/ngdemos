import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgSimpleComponent } from './ag-simple.component';

describe('AgSimpleComponent', () => {
  let component: AgSimpleComponent;
  let fixture: ComponentFixture<AgSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
