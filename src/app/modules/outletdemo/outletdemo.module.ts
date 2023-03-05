import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutletdemoRoutingModule } from './outletdemo-routing.module';
import { OutletdemoComponent } from './outletdemo.component';


@NgModule({
  declarations: [
    OutletdemoComponent
  ],
  imports: [
    CommonModule,
    OutletdemoRoutingModule
  ]
})
export class OutletdemoModule { }
