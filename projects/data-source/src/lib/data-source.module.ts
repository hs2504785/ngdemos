import { NgModule } from '@angular/core';
import { DataSourceComponent } from './data-source.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DataSourceListComponent } from './data-source-list/data-source-list.component';

@NgModule({
  declarations: [DataSourceComponent, DataSourceListComponent],
  imports: [MatTreeModule, MatIconModule, MatButtonModule],
  exports: [DataSourceComponent, DataSourceListComponent],
})
export class DataSourceModule {}
