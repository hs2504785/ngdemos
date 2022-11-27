import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScamdemoRoutingModule } from './scamdemo-routing.module';
import { ScamdemoComponent } from './scamdemo.component';


@NgModule({
  declarations: [
    ScamdemoComponent
  ],
  imports: [
    CommonModule,
    ScamdemoRoutingModule
  ]
})
export class ScamdemoModule { }
