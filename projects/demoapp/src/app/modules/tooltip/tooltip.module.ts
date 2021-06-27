import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipRoutingModule } from './tooltip-routing.module';
import { TooltipComponent } from './tooltip.component';
import { MyForDirective } from 'projects/libs/shared/src/public-api';

@NgModule({
  declarations: [TooltipComponent, MyForDirective],
  imports: [CommonModule, TooltipRoutingModule],
})
export class TooltipModule {}
