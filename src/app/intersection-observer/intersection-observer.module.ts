import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntersectionObserverRoutingModule } from './intersection-observer-routing.module';
import { IntersectionObserverComponent } from './intersection-observer.component';


@NgModule({
  declarations: [
    IntersectionObserverComponent
  ],
  imports: [
    CommonModule,
    IntersectionObserverRoutingModule
  ]
})
export class IntersectionObserverModule { }
