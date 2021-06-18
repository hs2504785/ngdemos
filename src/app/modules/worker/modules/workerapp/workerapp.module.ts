import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkerappRoutingModule } from './workerapp-routing.module';
import { WorkerappComponent } from './workerapp.component';


@NgModule({
  declarations: [
    WorkerappComponent
  ],
  imports: [
    CommonModule,
    WorkerappRoutingModule
  ]
})
export class WorkerappModule { }
