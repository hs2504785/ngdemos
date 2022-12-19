import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModalsRoutingModule } from './lazy-modals-routing.module';
import { LazyModalsComponent } from './lazy-modals.component';


@NgModule({
  declarations: [
    LazyModalsComponent
  ],
  imports: [
    CommonModule,
    LazyModalsRoutingModule
  ]
})
export class LazyModalsModule { }
