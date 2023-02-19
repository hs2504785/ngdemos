import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslationService } from 'projects/libs/shared/services/translation.service';

@Component({
  selector: 'app-lazy1',
  templateUrl: './lazy1.component.html',
  styleUrls: ['./lazy1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lazy1Component {
  constructor(private translationService: TranslationService) {
    // Load translations for this module
    this.translationService.loadModuleTranslations('lazy1');
  }
}
