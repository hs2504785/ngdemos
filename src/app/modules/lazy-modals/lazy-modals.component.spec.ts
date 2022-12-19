import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyModalsComponent } from './lazy-modals.component';

describe('LazyModalsComponent', () => {
  let component: LazyModalsComponent;
  let fixture: ComponentFixture<LazyModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyModalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
