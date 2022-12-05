import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggriddemoComponent } from './aggriddemo.component';

describe('AggriddemoComponent', () => {
  let component: AggriddemoComponent;
  let fixture: ComponentFixture<AggriddemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggriddemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggriddemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
