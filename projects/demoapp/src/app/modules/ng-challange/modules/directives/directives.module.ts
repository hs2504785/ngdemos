import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { SharedModule } from '../../shared/shared.module';
import { CreditCardDirective } from './dirs/credit-card.directive';
import { DebounceClickDirective } from './debounce-click/debounce-click.directive';

@NgModule({
  declarations: [
    DirectivesComponent,
    CreditCardComponent,
    CreditCardDirective,
    DebounceClickDirective,
  ],
  imports: [CommonModule, SharedModule, DirectivesRoutingModule],
})
export class DirectivesModule {}
