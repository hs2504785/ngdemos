import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnpushRoutingModule } from './onpush-routing.module';
import { OnpushComponent } from './onpush.component';


@NgModule({
  declarations: [
    OnpushComponent
  ],
  imports: [
    CommonModule,
    OnpushRoutingModule
  ]
})
export class OnpushModule { }
