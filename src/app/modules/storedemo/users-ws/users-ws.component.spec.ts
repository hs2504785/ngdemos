import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersWsComponent } from './users-ws.component';

describe('UsersWsComponent', () => {
  let component: UsersWsComponent;
  let fixture: ComponentFixture<UsersWsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersWsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersWsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
