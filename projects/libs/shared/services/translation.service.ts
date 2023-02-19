import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {}

  loadModuleTranslations(moduleName: string) {
    const i18nPath = `${moduleName}/${this.translate.getDefaultLang()}`;
    this.translate.setTranslation(i18nPath, this.getTranslation(i18nPath));
    this.translate.use(i18nPath);
  }

  getTranslation(i18nPath: string) {
    return `../../assets/i18n/${i18nPath}`;
  }
}
