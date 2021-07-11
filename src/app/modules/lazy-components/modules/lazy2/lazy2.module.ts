import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazy2RoutingModule } from './lazy2-routing.module';
import { Lazy2Component } from './lazy2.component';
import { Lazy2aComponent } from './lazy2a/lazy2a.component';
import { Lazy2bComponent } from './lazy2b/lazy2b.component';


@NgModule({
  declarations: [
    Lazy2Component,
    Lazy2aComponent,
    Lazy2bComponent
  ],
  imports: [
    CommonModule,
    Lazy2RoutingModule
  ]
})
export class Lazy2Module { }
