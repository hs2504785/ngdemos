import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithCachingRoutingModule } from './with-caching-routing.module';
import { WithCachingComponent } from './with-caching.component';


@NgModule({
  declarations: [
    WithCachingComponent
  ],
  imports: [
    CommonModule,
    WithCachingRoutingModule
  ]
})
export class WithCachingModule { }
