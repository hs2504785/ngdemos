import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenderCircleRoutingModule } from './render-circle-routing.module';
import { RenderCircleComponent } from './render-circle.component';


@NgModule({
  declarations: [
    RenderCircleComponent
  ],
  imports: [
    CommonModule,
    RenderCircleRoutingModule
  ]
})
export class RenderCircleModule { }
