import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazy1RoutingModule } from './lazy1-routing.module';
import { Lazy1Component } from './lazy1.component';


@NgModule({
  declarations: [
    Lazy1Component
  ],
  imports: [
    CommonModule,
    Lazy1RoutingModule
  ]
})
export class Lazy1Module { }
