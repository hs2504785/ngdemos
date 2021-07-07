import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  show = false;
  selectedLocale = 'en';
  constructor(
    private localeService: LocaleService,
    private translateService: TranslateService,
  ) {}

  ngOnInit(): void {}

  changeLocale(event, lang) {
    event.preventDefault();
    // already set in app.module.ts
    // this.translateService.setDefaultLang('en');
    this.translateService.use(lang);
    this.localeService.locale = lang;
    this.show = false;
    this.selectedLocale = lang;
  }
}
