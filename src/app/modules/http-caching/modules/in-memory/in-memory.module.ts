import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InMemoryRoutingModule } from './in-memory-routing.module';
import { InMemoryComponent } from './in-memory.component';


@NgModule({
  declarations: [
    InMemoryComponent
  ],
  imports: [
    CommonModule,
    InMemoryRoutingModule
  ]
})
export class InMemoryModule { }
