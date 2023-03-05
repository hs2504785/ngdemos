import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutTemplateOutletComponent } from './without-template-outlet.component';

describe('WithoutTemplateOutletComponent', () => {
  let component: WithoutTemplateOutletComponent;
  let fixture: ComponentFixture<WithoutTemplateOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutTemplateOutletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutTemplateOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
