import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryPluginComponent } from './jquery-plugin.component';

describe('JqueryPluginComponent', () => {
  let component: JqueryPluginComponent;
  let fixture: ComponentFixture<JqueryPluginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JqueryPluginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JqueryPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
