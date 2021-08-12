import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersEntityDemoComponent } from './users-entity-demo.component';

describe('UsersEntityDemoComponent', () => {
  let component: UsersEntityDemoComponent;
  let fixture: ComponentFixture<UsersEntityDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersEntityDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersEntityDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
