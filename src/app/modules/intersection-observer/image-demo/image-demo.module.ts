import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageDemoRoutingModule } from './image-demo-routing.module';
import { ImageDemoComponent } from './image-demo.component';


@NgModule({
  declarations: [
    ImageDemoComponent
  ],
  imports: [
    CommonModule,
    ImageDemoRoutingModule
  ]
})
export class ImageDemoModule { }
