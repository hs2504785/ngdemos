import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazydemoRoutingModule } from './lazydemo-routing.module';
import { LazydemoComponent } from './lazydemo.component';


@NgModule({
  declarations: [
    LazydemoComponent
  ],
  imports: [
    CommonModule,
    LazydemoRoutingModule
  ]
})
export class LazydemoModule { }
