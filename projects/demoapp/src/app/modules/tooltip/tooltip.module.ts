import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipRoutingModule } from './tooltip-routing.module';
import { TooltipComponent } from './tooltip.component';


@NgModule({
  declarations: [
    TooltipComponent
  ],
  imports: [
    CommonModule,
    TooltipRoutingModule
  ]
})
export class TooltipModule { }
