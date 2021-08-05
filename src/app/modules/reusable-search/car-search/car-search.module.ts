import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarSearchRoutingModule } from './car-search-routing.module';
import { CarSearchComponent } from './car-search.component';


@NgModule({
  declarations: [
    CarSearchComponent
  ],
  imports: [
    CommonModule,
    CarSearchRoutingModule
  ]
})
export class CarSearchModule { }
