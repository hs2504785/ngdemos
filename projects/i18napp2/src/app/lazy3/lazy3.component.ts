import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslationService } from 'projects/libs/shared/services/translation.service';

@Component({
  selector: 'app-lazy3',
  templateUrl: './lazy3.component.html',
  styleUrls: ['./lazy3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lazy3Component {
  constructor(private translationService: TranslationService) {
    // Load translations for this module
    this.translationService.loadModuleTranslations('lazy3');
  }
}
