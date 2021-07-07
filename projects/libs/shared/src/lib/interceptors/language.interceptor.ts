import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocaleService } from 'projects/i18napp/src/app/shared/services/locale.service';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  constructor(private localeService: LocaleService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const lang = this.localeService.locale || 'us';

    request = request.clone({
      setHeaders: {
        'Accept-Language': lang,
      },
    });
    return next.handle(request);
  }
}
