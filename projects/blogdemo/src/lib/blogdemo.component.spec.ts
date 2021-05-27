import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogdemoComponent } from './blogdemo.component';

describe('BlogdemoComponent', () => {
  let component: BlogdemoComponent;
  let fixture: ComponentFixture<BlogdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
