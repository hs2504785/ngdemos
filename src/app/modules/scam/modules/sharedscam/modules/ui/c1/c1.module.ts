import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1Component } from './c1/c1.component';

@NgModule({
  declarations: [C1Component],
  imports: [CommonModule],
  exports: [C1Component],
})
export class C1Module {}
