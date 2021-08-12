import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoredemoRoutingModule } from './storedemo-routing.module';
import { StoredemoComponent } from './storedemo.component';

@NgModule({
  declarations: [StoredemoComponent],
  imports: [CommonModule, StoredemoRoutingModule],
})
export class StoredemoModule {}
