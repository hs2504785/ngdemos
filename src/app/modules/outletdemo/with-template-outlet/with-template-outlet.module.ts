import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithTemplateOutletRoutingModule } from './with-template-outlet-routing.module';
import { WithTemplateOutletComponent } from './with-template-outlet.component';


@NgModule({
  declarations: [
    WithTemplateOutletComponent
  ],
  imports: [
    CommonModule,
    WithTemplateOutletRoutingModule
  ]
})
export class WithTemplateOutletModule { }
