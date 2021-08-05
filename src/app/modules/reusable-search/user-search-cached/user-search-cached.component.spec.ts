import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchCachedComponent } from './user-search-cached.component';

describe('UserSearchCachedComponent', () => {
  let component: UserSearchCachedComponent;
  let fixture: ComponentFixture<UserSearchCachedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSearchCachedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchCachedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
