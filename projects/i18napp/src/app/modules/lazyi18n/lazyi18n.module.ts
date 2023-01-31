import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazyi18nRoutingModule } from './lazyi18n-routing.module';
import { Lazyi18nComponent } from './lazyi18n.component';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { createTranslateLoader } from '../../utils/i18nutils';

@NgModule({
  declarations: [Lazyi18nComponent],
  imports: [
    CommonModule,
    Lazyi18nRoutingModule,
    TranslateModule.forChild({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient, Router],
      },
      isolate: true,
    }),
  ],
})
export class Lazyi18nModule {}
