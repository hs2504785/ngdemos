import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazyi18ndemoRoutingModule } from './lazyi18ndemo-routing.module';
import { Lazyi18ndemoComponent } from './lazyi18ndemo.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [Lazyi18ndemoComponent],
  imports: [
    CommonModule,
    Lazyi18ndemoRoutingModule,
    TranslateModule.forChild(),
  ],
})
export class Lazyi18ndemoModule {}
