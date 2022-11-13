import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCachingDemoComponent } from './simple-caching-demo.component';

describe('SimpleCachingDemoComponent', () => {
  let component: SimpleCachingDemoComponent;
  let fixture: ComponentFixture<SimpleCachingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleCachingDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleCachingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
