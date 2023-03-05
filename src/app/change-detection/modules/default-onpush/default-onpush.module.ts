import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultOnpushRoutingModule } from './default-onpush-routing.module';
import { DefaultOnpushComponent } from './default-onpush.component';
import { HomeComponent } from './home/home.component';
import { ComponentOne } from './home/ui/component-one.component';
import { ComponentTwo } from './home/ui/component-two.component';
import { CoolButtonComponent } from './shared/ui/cool-button.component';

@NgModule({
  declarations: [DefaultOnpushComponent, HomeComponent],
  imports: [
    CommonModule,
    DefaultOnpushRoutingModule,
    ComponentOne,
    ComponentTwo,
    CoolButtonComponent,
  ],
})
export class DefaultOnpushModule {}
