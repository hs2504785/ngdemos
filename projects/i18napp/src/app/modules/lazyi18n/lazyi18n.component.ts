import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-lazyi18n',
  templateUrl: './lazyi18n.component.html',
  styleUrls: ['./lazyi18n.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lazyi18nComponent {
  // constructor(private translateService: TranslateService) {
  //   // this.translateService.setTranslation()
  //   this.translateService.use(this.translateService.getDefaultLang());
  // }

  constructor(private translationService: TranslationService) {
    // Load translations for this module
    this.translationService.loadModuleTranslations('lazyi18n');
  }
}
