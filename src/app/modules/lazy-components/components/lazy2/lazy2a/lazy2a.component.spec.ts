import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazy2aComponent } from './lazy2a.component';

describe('Lazy2aComponent', () => {
  let component: Lazy2aComponent;
  let fixture: ComponentFixture<Lazy2aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lazy2aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lazy2aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
