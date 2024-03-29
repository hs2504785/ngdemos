import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Eager2RoutingModule } from './eager2-routing.module';
import { Eager2Component } from './eager2.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [Eager2Component],
  imports: [CommonModule, Eager2RoutingModule, TranslateModule.forChild()],
})
export class Eager2Module {}
