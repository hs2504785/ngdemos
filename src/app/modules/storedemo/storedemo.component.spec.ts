import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredemoComponent } from './storedemo.component';

describe('StoredemoComponent', () => {
  let component: StoredemoComponent;
  let fixture: ComponentFixture<StoredemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoredemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoredemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
