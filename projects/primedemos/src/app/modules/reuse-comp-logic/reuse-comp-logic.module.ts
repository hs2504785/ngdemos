import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReuseCompLogicRoutingModule } from './reuse-comp-logic-routing.module';
import { ReuseCompLogicComponent } from './reuse-comp-logic.component';
import { DropdownModule } from 'primeng/dropdown';
import { OtherComponent } from './components/other/other.component';

@NgModule({
  declarations: [ReuseCompLogicComponent, OtherComponent],
  imports: [CommonModule, ReuseCompLogicRoutingModule, DropdownModule],
})
export class ReuseCompLogicModule {}
