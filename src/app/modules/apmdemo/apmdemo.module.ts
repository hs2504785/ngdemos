import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApmdemoRoutingModule } from './apmdemo-routing.module';
import { ApmdemoComponent } from './apmdemo.component';


@NgModule({
  declarations: [
    ApmdemoComponent
  ],
  imports: [
    CommonModule,
    ApmdemoRoutingModule
  ]
})
export class ApmdemoModule { }
