import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleCachingDemoRoutingModule } from './simple-caching-demo-routing.module';
import { SimpleCachingDemoComponent } from './simple-caching-demo.component';
import { SimpleCachingService } from './services/simple-caching.service';


@NgModule({
  declarations: [
    SimpleCachingDemoComponent
  ],
  imports: [
    CommonModule,
    SimpleCachingDemoRoutingModule
  ],
  providers:[
    SimpleCachingService
  ]
})
export class SimpleCachingDemoModule { }
