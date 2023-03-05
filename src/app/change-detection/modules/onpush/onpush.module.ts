import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnpushRoutingModule } from './onpush-routing.module';
import { OnpushComponent } from './onpush.component';
import { HomeComponent } from './home/home.component';
import { ComponentOne } from './home/ui/component-one.component';
import { ComponentTwo } from './home/ui/component-two.component';
import { CoolButtonComponent } from './shared/ui/cool-button.component';

@NgModule({
  declarations: [OnpushComponent, HomeComponent],
  imports: [
    CommonModule,
    OnpushRoutingModule,
    ComponentOne,
    ComponentTwo,
    CoolButtonComponent,
  ],
})
export class OnpushModule {}
