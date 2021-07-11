import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyComponentsRoutingModule } from './lazy-components-routing.module';
import { LazyComponentsComponent } from './lazy-components.component';


@NgModule({
  declarations: [
    LazyComponentsComponent
  ],
  imports: [
    CommonModule,
    LazyComponentsRoutingModule
  ]
})
export class LazyComponentsModule { }
