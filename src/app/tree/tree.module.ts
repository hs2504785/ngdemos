import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeRoutingModule } from './tree-routing.module';
import { TreeComponent } from './tree.component';
import { DataSourceModule } from 'data-source';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TreeComponent],
  imports: [CommonModule, TreeRoutingModule, DataSourceModule, MatButtonModule],
})
export class TreeModule {}
