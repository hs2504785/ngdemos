import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithoutCachingRoutingModule } from './without-caching-routing.module';
import { WithoutCachingComponent } from './without-caching.component';


@NgModule({
  declarations: [
    WithoutCachingComponent
  ],
  imports: [
    CommonModule,
    WithoutCachingRoutingModule
  ]
})
export class WithoutCachingModule { }
