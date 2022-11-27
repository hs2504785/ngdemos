import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZippyRoutingModule } from './zippy-routing.module';
import { ZippyComponent } from './zippy.component';


@NgModule({
  declarations: [
    ZippyComponent
  ],
  imports: [
    CommonModule,
    ZippyRoutingModule
  ]
})
export class ZippyModule { }
