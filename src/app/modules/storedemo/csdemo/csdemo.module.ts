import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsdemoRoutingModule } from './csdemo-routing.module';
import { CsdemoComponent } from './csdemo.component';


@NgModule({
  declarations: [
    CsdemoComponent
  ],
  imports: [
    CommonModule,
    CsdemoRoutingModule
  ]
})
export class CsdemoModule { }
