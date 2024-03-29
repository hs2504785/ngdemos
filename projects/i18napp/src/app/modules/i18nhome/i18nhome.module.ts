import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { I18nhomeRoutingModule } from './i18nhome-routing.module';
import { I18nhomeComponent } from './i18nhome.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { createTranslateLoader } from '../../utils/i18nutils';

@NgModule({
  declarations: [I18nhomeComponent],
  imports: [
    CommonModule,
    I18nhomeRoutingModule,
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
export class I18nhomeModule {}
