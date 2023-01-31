import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient, router: Router) {
  return new TranslateHttpLoader(http, `./assets/i18n${router.url}/`, '.json');
}
