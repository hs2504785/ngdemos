import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCsComponent } from './users-cs.component';

describe('UsersCsComponent', () => {
  let component: UsersCsComponent;
  let fixture: ComponentFixture<UsersCsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersCsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
