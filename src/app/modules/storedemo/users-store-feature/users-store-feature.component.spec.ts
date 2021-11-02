import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersStoreFeatureComponent } from './users-store-feature.component';

describe('UsersStoreFeatureComponent', () => {
  let component: UsersStoreFeatureComponent;
  let fixture: ComponentFixture<UsersStoreFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersStoreFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersStoreFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
