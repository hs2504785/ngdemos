import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-lazyi18ndemo',
  templateUrl: './lazyi18ndemo.component.html',
  styleUrls: ['./lazyi18ndemo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lazyi18ndemoComponent {
  constructor(private translationService: TranslationService) {
    // Load translations for this module
    this.translationService.loadModuleTranslations('lazyi18ndemo');
  }
}
