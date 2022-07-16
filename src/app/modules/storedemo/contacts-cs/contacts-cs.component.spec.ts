import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsCsComponent } from './contacts-cs.component';

describe('ContactsCsComponent', () => {
  let component: ContactsCsComponent;
  let fixture: ComponentFixture<ContactsCsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsCsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
