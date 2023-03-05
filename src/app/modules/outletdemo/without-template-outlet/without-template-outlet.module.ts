import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithoutTemplateOutletRoutingModule } from './without-template-outlet-routing.module';
import { WithoutTemplateOutletComponent } from './without-template-outlet.component';


@NgModule({
  declarations: [
    WithoutTemplateOutletComponent
  ],
  imports: [
    CommonModule,
    WithoutTemplateOutletRoutingModule
  ]
})
export class WithoutTemplateOutletModule { }
