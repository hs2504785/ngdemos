import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicTemplateRoutingModule } from './dynamic-template-routing.module';
import { DynamicTemplateComponent } from './dynamic-template.component';


@NgModule({
  declarations: [
    DynamicTemplateComponent
  ],
  imports: [
    CommonModule,
    DynamicTemplateRoutingModule
  ]
})
export class DynamicTemplateModule { }
