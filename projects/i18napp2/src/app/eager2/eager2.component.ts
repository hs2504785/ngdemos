import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslationService } from 'projects/libs/shared/services/translation.service';

@Component({
  selector: 'app-eager2',
  templateUrl: './eager2.component.html',
  styleUrls: ['./eager2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Eager2Component {
  constructor(private translationService: TranslationService) {
    // Load translations for this module
    this.translationService.loadModuleTranslations('eager2');
  }
}
