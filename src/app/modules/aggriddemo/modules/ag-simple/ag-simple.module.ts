import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgSimpleRoutingModule } from './ag-simple-routing.module';
import { AgSimpleComponent } from './ag-simple.component';


@NgModule({
  declarations: [
    AgSimpleComponent
  ],
  imports: [
    CommonModule,
    AgSimpleRoutingModule
  ]
})
export class AgSimpleModule { }
