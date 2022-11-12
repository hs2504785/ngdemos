import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithCachingComponent } from './with-caching.component';

describe('WithCachingComponent', () => {
  let component: WithCachingComponent;
  let fixture: ComponentFixture<WithCachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithCachingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithCachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
