import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutsideClicksRoutingModule } from './outside-clicks-routing.module';
import { OutsideClicksComponent } from './outside-clicks.component';
import { DropdownOptimizedComponent } from './dropdown-optimized/dropdown-optimized.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    OutsideClicksComponent,
    DropdownComponent,
    DropdownOptimizedComponent,
  ],
  imports: [CommonModule, OutsideClicksRoutingModule],
})
export class OutsideClicksModule {}
