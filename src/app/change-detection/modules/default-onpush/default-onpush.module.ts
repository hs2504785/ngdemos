import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultOnpushRoutingModule } from './default-onpush-routing.module';
import { DefaultOnpushComponent } from './default-onpush.component';


@NgModule({
  declarations: [
    DefaultOnpushComponent
  ],
  imports: [
    CommonModule,
    DefaultOnpushRoutingModule
  ]
})
export class DefaultOnpushModule { }
