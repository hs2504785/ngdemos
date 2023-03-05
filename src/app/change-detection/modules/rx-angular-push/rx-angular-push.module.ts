import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxAngularPushRoutingModule } from './rx-angular-push-routing.module';
import { RxAngularPushComponent } from './rx-angular-push.component';
import { ComponentOne } from './home/ui/component-one.component';
import { ComponentTwo } from './home/ui/component-two.component';
import { CoolButtonComponent } from './shared/ui/cool-button.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [RxAngularPushComponent, HomeComponent],
  imports: [
    CommonModule,
    RxAngularPushRoutingModule,
    ComponentOne,
    ComponentTwo,
    CoolButtonComponent,
  ],
})
export class RxAngularPushModule {}
