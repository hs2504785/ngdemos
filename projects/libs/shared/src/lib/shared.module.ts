import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { CreditCardDirective } from './directives/credit-card.directive';



@NgModule({
  declarations: [
    SharedComponent,
    CreditCardDirective
  ],
  imports: [
  ],
  exports: [
    SharedComponent
  ]
})
export class SharedModule { }
