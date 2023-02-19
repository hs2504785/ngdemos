import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazy2RoutingModule } from './lazy2-routing.module';
import { Lazy2Component } from './lazy2.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@NgModule({
  declarations: [Lazy2Component],
  imports: [CommonModule, Lazy2RoutingModule, TranslateModule.forChild()],
})
export class Lazy2Module {
  constructor(private translateService: TranslateService) {
    this.translateService.use('en');
  }
}
