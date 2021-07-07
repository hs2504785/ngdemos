import { Component, OnInit } from '@angular/core';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  show = false;
  selectedLocale = 'us';
  constructor(private localeService: LocaleService) {}

  ngOnInit(): void {}

  changeLocale(event, val) {
    event.preventDefault();
    this.localeService.locale = val;
    this.show = false;
    this.selectedLocale = val;
  }
}
