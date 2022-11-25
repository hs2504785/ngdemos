import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsdumbComponent } from './vsdumb.component';

describe('VsdumbComponent', () => {
  let component: VsdumbComponent;
  let fixture: ComponentFixture<VsdumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsdumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsdumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
