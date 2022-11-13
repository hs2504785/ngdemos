import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleCachingRoutingModule } from './simple-caching-routing.module';
import { SimpleCachingComponent } from './simple-caching.component';


@NgModule({
  declarations: [
    SimpleCachingComponent
  ],
  imports: [
    CommonModule,
    SimpleCachingRoutingModule
  ]
})
export class SimpleCachingModule { }
