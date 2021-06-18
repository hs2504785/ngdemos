import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkerappRoutingModule } from './workerapp-routing.module';
import { WorkerappComponent } from './workerapp.component';
// d3 and nvd3 should be included somewhere
import 'd3';
import 'nvd3';
import { NvD3Module } from 'ng2-nvd3';

@NgModule({
  declarations: [WorkerappComponent],
  imports: [CommonModule, WorkerappRoutingModule, NvD3Module],
})
export class WorkerappModule {}
