import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEntityDialogComponent } from './user-entity-dialog.component';

describe('UserEntityDialogComponent', () => {
  let component: UserEntityDialogComponent;
  let fixture: ComponentFixture<UserEntityDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEntityDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEntityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
