import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdbSampleComponent } from './idb-sample.component';

describe('IdbSampleComponent', () => {
  let component: IdbSampleComponent;
  let fixture: ComponentFixture<IdbSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdbSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdbSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
