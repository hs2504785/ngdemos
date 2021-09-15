import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChallangeRoutingModule } from './ng-challange-routing.module';
import { NgChallangeComponent } from './ng-challange.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { CardComponent } from '../../components/card/card.component';

@NgModule({
  declarations: [NgChallangeComponent, ToolbarComponent, CardComponent],
  imports: [CommonModule, NgChallangeRoutingModule],
})
export class NgChallangeModule {}
