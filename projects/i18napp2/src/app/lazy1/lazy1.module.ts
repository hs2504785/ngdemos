import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazy1RoutingModule } from './lazy1-routing.module';
import { Lazy1Component } from './lazy1.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [Lazy1Component],
  imports: [CommonModule, Lazy1RoutingModule, TranslateModule.forChild()],
})
export class Lazy1Module {}
