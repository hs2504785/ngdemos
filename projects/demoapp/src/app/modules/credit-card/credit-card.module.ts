import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardRoutingModule } from './credit-card-routing.module';
import { CreditCardComponent } from './credit-card.component';
import {
  CreditCardDirective,
  TooltipDirective,
} from 'projects/libs/shared/src/public-api';

@NgModule({
  declarations: [CreditCardComponent, CreditCardDirective, TooltipDirective],
  imports: [CommonModule, CreditCardRoutingModule],
})
export class CreditCardModule {}
