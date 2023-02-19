import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslationService } from 'projects/libs/shared/services/translation.service';

@Component({
  selector: 'app-lazy2',
  templateUrl: './lazy2.component.html',
  styleUrls: ['./lazy2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lazy2Component {
  constructor(private translationService: TranslationService) {
    // Load translations for this module
    this.translationService.loadModuleTranslations('lazy2');
  }
}
