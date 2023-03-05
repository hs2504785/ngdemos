import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxAngularPushComponent } from './rx-angular-push.component';

describe('RxAngularPushComponent', () => {
  let component: RxAngularPushComponent;
  let fixture: ComponentFixture<RxAngularPushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxAngularPushComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxAngularPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
