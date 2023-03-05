import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxAngularPushRoutingModule } from './rx-angular-push-routing.module';
import { RxAngularPushComponent } from './rx-angular-push.component';


@NgModule({
  declarations: [
    RxAngularPushComponent
  ],
  imports: [
    CommonModule,
    RxAngularPushRoutingModule
  ]
})
export class RxAngularPushModule { }
