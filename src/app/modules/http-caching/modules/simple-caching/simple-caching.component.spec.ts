import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCachingComponent } from './simple-caching.component';

describe('SimpleCachingComponent', () => {
  let component: SimpleCachingComponent;
  let fixture: ComponentFixture<SimpleCachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleCachingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleCachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
