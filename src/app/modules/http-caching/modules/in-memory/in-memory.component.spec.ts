import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InMemoryComponent } from './in-memory.component';

describe('InMemoryComponent', () => {
  let component: InMemoryComponent;
  let fixture: ComponentFixture<InMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InMemoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
