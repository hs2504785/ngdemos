import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { I18nhomeRoutingModule } from './i18nhome-routing.module';
import { I18nhomeComponent } from './i18nhome.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/home/', '.json');
}

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
        deps: [HttpClient],
      },
      isolate: true,
    }),
  ],
})
export class I18nhomeModule {}
