import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChallangeRoutingModule } from './ng-challange-routing.module';
import { NgChallangeComponent } from './ng-challange.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { AccordianComponent } from '../../components/accordian/accordian.component';
import { StarRatingsComponent } from '../../components/star-ratings/star-ratings.component';
import { TopOfPageComponent } from '../../components/top-of-page/top-of-page.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    NgChallangeComponent,
    ToolbarComponent,
    AccordianComponent,
    StarRatingsComponent,
    TopOfPageComponent,
  ],
  imports: [CommonModule, NgChallangeRoutingModule, SharedModule],
})
export class NgChallangeModule {}
