import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { LocaleService } from '../../shared/services/locale.service';

@Component({
  selector: 'app-i18nhome',
  templateUrl: './i18nhome.component.html',
  styleUrls: ['./i18nhome.component.scss'],
})
export class I18nhomeComponent implements OnInit {
  locale$: Observable<string> = this.localeService.localeStore$;

  constructor(
    private localeService: LocaleService,
    private translateService: TranslateService,
  ) {}

  ngOnInit(): void {
    this.updateLocale();
  }

  updateLocale() {
    this.locale$.subscribe(lang => {
      this.translateService.use(lang);
    });
  }
}
