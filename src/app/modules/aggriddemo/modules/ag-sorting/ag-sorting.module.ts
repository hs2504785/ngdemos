import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgSortingRoutingModule } from './ag-sorting-routing.module';
import { AgSortingComponent } from './ag-sorting.component';


@NgModule({
  declarations: [
    AgSortingComponent
  ],
  imports: [
    CommonModule,
    AgSortingRoutingModule
  ]
})
export class AgSortingModule { }
