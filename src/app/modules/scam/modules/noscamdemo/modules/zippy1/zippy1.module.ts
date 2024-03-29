import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Zippy1RoutingModule } from './zippy1-routing.module';
import { NoscamSharedModule } from '../../../shared/noscam-shared.module';
import { Zippy1Component } from './zippy1.component';
import { UiModule } from '../../../shared/ui/ui.module';

@NgModule({
  declarations: [Zippy1Component],
  imports: [CommonModule, Zippy1RoutingModule, UiModule, NoscamSharedModule],
})
export class Zippy1Module {}
