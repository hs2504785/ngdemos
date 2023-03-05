import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnpushAsyncRoutingModule } from './onpush-async-routing.module';
import { OnpushAsyncComponent } from './onpush-async.component';


@NgModule({
  declarations: [
    OnpushAsyncComponent
  ],
  imports: [
    CommonModule,
    OnpushAsyncRoutingModule
  ]
})
export class OnpushAsyncModule { }
