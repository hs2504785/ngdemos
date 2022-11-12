import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutCachingComponent } from './without-caching.component';

describe('WithoutCachingComponent', () => {
  let component: WithoutCachingComponent;
  let fixture: ComponentFixture<WithoutCachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutCachingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutCachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
