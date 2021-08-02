import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderCircleComponent } from './render-circle.component';

describe('RenderCircleComponent', () => {
  let component: RenderCircleComponent;
  let fixture: ComponentFixture<RenderCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
