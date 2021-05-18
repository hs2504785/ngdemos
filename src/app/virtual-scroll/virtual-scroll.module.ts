import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualScrollRoutingModule } from './virtual-scroll-routing.module';
import { VirtualScrollComponent } from './virtual-scroll.component';


@NgModule({
  declarations: [
    VirtualScrollComponent
  ],
  imports: [
    CommonModule,
    VirtualScrollRoutingModule
  ]
})
export class VirtualScrollModule { }
