import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazy2bComponent } from './lazy2b.component';

describe('Lazy2bComponent', () => {
  let component: Lazy2bComponent;
  let fixture: ComponentFixture<Lazy2bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lazy2bComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lazy2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
