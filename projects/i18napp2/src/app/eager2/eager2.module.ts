import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Eager2RoutingModule } from './eager2-routing.module';
import { Eager2Component } from './eager2.component';


@NgModule({
  declarations: [
    Eager2Component
  ],
  imports: [
    CommonModule,
    Eager2RoutingModule
  ]
})
export class Eager2Module { }
