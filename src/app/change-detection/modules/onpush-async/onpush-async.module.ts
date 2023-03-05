import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnpushAsyncRoutingModule } from './onpush-async-routing.module';
import { OnpushAsyncComponent } from './onpush-async.component';
import { ComponentOne } from './home/ui/component-one.component';
import { ComponentTwo } from './home/ui/component-two.component';
import { CoolButtonComponent } from './shared/ui/cool-button.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [OnpushAsyncComponent, HomeComponent],
  imports: [
    CommonModule,
    OnpushAsyncRoutingModule,
    ComponentOne,
    ComponentTwo,
    CoolButtonComponent,
  ],
})
export class OnpushAsyncModule {}
