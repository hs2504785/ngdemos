import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgSimpleRoutingModule } from './ag-simple-routing.module';
import { AgSimpleComponent } from './ag-simple.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [AgSimpleComponent],
  imports: [CommonModule, AgSimpleRoutingModule, AgGridModule],
})
export class AgSimpleModule {}
