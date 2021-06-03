import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoreDialogComponent } from './user-store-dialog.component';

describe('UserStoreDialogComponent', () => {
  let component: UserStoreDialogComponent;
  let fixture: ComponentFixture<UserStoreDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStoreDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
