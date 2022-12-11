import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';

import { DataSourceListComponent } from './data-source-list.component';

describe('DataSourceListComponent', () => {
  let component: DataSourceListComponent;
  let fixture: ComponentFixture<DataSourceListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DataSourceListComponent],
        imports: [MatButtonModule, MatIconModule, MatTreeModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
