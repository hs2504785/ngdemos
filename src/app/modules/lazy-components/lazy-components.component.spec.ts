import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyComponentsComponent } from './lazy-components.component';

describe('LazyComponentsComponent', () => {
  let component: LazyComponentsComponent;
  let fixture: ComponentFixture<LazyComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
