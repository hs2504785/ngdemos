import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCachingComponent } from './http-caching.component';

describe('HttpCachingComponent', () => {
  let component: HttpCachingComponent;
  let fixture: ComponentFixture<HttpCachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpCachingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpCachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
