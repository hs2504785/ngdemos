import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Zippy1RoutingModule } from './zippy1-routing.module';
import { Zippy1Component } from './zippy1.component';


@NgModule({
  declarations: [
    Zippy1Component
  ],
  imports: [
    CommonModule,
    Zippy1RoutingModule
  ]
})
export class Zippy1Module { }
