import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeRoutingModule } from './tree-routing.module';
import { TreeComponent } from './tree.component';
import { MatButtonModule } from '@angular/material/button';
import { DataSourceModule } from 'projects/data-source/src/public-api';

@NgModule({
  declarations: [TreeComponent],
  imports: [CommonModule, TreeRoutingModule, MatButtonModule, DataSourceModule],
  providers: [],
})
export class TreeModule {}
