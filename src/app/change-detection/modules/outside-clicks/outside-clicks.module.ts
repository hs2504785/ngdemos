import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutsideClicksRoutingModule } from './outside-clicks-routing.module';
import { OutsideClicksComponent } from './outside-clicks.component';


@NgModule({
  declarations: [
    OutsideClicksComponent
  ],
  imports: [
    CommonModule,
    OutsideClicksRoutingModule
  ]
})
export class OutsideClicksModule { }
