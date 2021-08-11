import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCsDialogComponent } from './user-cs-dialog.component';

describe('UserCsDialogComponent', () => {
  let component: UserCsDialogComponent;
  let fixture: ComponentFixture<UserCsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
