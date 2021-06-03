import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersEntityComponent } from './users-entity.component';

describe('UsersEntityComponent', () => {
  let component: UsersEntityComponent;
  let fixture: ComponentFixture<UsersEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
