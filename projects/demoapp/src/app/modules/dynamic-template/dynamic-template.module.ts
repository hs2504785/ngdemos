import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicTemplateRoutingModule } from './dynamic-template-routing.module';
import { DynamicTemplateComponent } from './dynamic-template.component';
import { TemplateOutletComponent } from './template-outlet/template-outlet.component';


@NgModule({
  declarations: [
    DynamicTemplateComponent,
    TemplateOutletComponent
  ],
  imports: [
    CommonModule,
    DynamicTemplateRoutingModule
  ]
})
export class DynamicTemplateModule { }
