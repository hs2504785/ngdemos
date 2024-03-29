import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslationService } from 'projects/libs/shared/services/translation.service';

@Component({
  selector: 'app-eager1',
  templateUrl: './eager1.component.html',
  styleUrls: ['./eager1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Eager1Component {
  constructor(private translationService: TranslationService) {
    // Load translations for this module
    this.translationService.loadModuleTranslations('eager1');
  }
}
