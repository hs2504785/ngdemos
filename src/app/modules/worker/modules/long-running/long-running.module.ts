import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LongRunningRoutingModule } from './long-running-routing.module';
import { LongRunningComponent } from './long-running.component';


@NgModule({
  declarations: [
    LongRunningComponent
  ],
  imports: [
    CommonModule,
    LongRunningRoutingModule
  ]
})
export class LongRunningModule { }
