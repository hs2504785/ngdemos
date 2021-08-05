import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReusableSearchRoutingModule } from './reusable-search-routing.module';
import { ReusableSearchComponent } from './reusable-search.component';


@NgModule({
  declarations: [
    ReusableSearchComponent
  ],
  imports: [
    CommonModule,
    ReusableSearchRoutingModule
  ]
})
export class ReusableSearchModule { }
