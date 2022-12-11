import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeRoutingModule } from './tree-routing.module';
import { TreeComponent } from './tree.component';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { DataSourceModule } from 'projects/data-source/src/public-api';

@NgModule({
  declarations: [TreeComponent],
  imports: [CommonModule, TreeRoutingModule, MatButtonModule, DataSourceModule],
  providers: [],
})
export class TreeModule {}
