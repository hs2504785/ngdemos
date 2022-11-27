import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Zippy1RoutingModule } from './zippy1-routing.module';
import { Zippy1Component } from './zippy1.component';
import { C1Module } from '../../../sharedscam/modules/ui/c1/c1.module';
import { C2Module } from '../../../sharedscam/modules/ui/c2/c2.module';

@NgModule({
  declarations: [Zippy1Component],
  imports: [CommonModule, Zippy1RoutingModule, C1Module, C2Module],
})
export class Zippy1Module {}
