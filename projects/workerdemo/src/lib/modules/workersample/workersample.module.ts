import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkersampleRoutingModule } from './workersample-routing.module';
import { WorkersampleComponent } from './workersample.component';


@NgModule({
  declarations: [
    WorkersampleComponent
  ],
  imports: [
    CommonModule,
    WorkersampleRoutingModule
  ]
})
export class WorkersampleModule { }
