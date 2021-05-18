import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualScrollRoutingModule } from './virtual-scroll-routing.module';
import { VirtualScrollComponent } from './virtual-scroll.component';
import { BasicComponent } from './components/basic/basic.component';
import { DemoComponent } from './components/demo/demo.component';


@NgModule({
  declarations: [
    VirtualScrollComponent,
    BasicComponent,
    DemoComponent
  ],
  imports: [
    CommonModule,
    VirtualScrollRoutingModule
  ]
})
export class VirtualScrollModule { }
