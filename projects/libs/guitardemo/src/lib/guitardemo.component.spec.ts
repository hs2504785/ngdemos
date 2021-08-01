import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitardemoComponent } from './guitardemo.component';

describe('GuitardemoComponent', () => {
  let component: GuitardemoComponent;
  let fixture: ComponentFixture<GuitardemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitardemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitardemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
