import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChallangeRoutingModule } from './ng-challange-routing.module';
import { NgChallangeComponent } from './ng-challange.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { CardComponent } from '../../components/card/card.component';
import { AccordianComponent } from '../../components/accordian/accordian.component';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { StarRatingsComponent } from '../../components/star-ratings/star-ratings.component';
import { TopOfPageComponent } from '../../components/top-of-page/top-of-page.component';

@NgModule({
  declarations: [
    NgChallangeComponent,
    ToolbarComponent,
    CardComponent,
    AccordianComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    TopOfPageComponent,
  ],
  imports: [CommonModule, NgChallangeRoutingModule],
})
export class NgChallangeModule {}
