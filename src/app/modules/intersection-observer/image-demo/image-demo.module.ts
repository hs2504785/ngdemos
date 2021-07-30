import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageDemoRoutingModule } from './image-demo-routing.module';
import { ImageDemoComponent } from './image-demo.component';
import { IntersectionObserverDirectiveModule } from 'src/app/shared/directives/intersection-observer/intersection-observer-directive.module';

@NgModule({
  declarations: [ImageDemoComponent],
  imports: [
    CommonModule,
    ImageDemoRoutingModule,
    IntersectionObserverDirectiveModule,
  ],
})
export class ImageDemoModule {}
