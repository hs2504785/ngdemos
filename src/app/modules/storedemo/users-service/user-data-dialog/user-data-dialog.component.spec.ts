import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataDialogComponent } from './user-data-dialog.component';

describe('UserDataDialogComponent', () => {
  let component: UserDataDialogComponent;
  let fixture: ComponentFixture<UserDataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDataDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
