import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazyi18nRoutingModule } from './lazyi18n-routing.module';
import { Lazyi18nComponent } from './lazyi18n.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, `./assets/i18n/lazyi18n/`, '.json');
}

@NgModule({
  declarations: [Lazyi18nComponent],
  imports: [CommonModule, Lazyi18nRoutingModule, TranslateModule.forChild()],
})
export class Lazyi18nModule {}
