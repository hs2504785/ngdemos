import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCachingService } from '../../services/http-caching.service';

@Component({
  selector: 'app-without-caching',
  templateUrl: './without-caching.component.html',
  styleUrls: ['./without-caching.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WithoutCachingComponent {
  countries$: Observable<any> = this.httpCachingService.getCountries();
  states$: Observable<any>;
  cities$: Observable<any>;

  constructor(private httpCachingService: HttpCachingService) {}

  handleCountryChange(countryCode) {
    this.states$ = this.httpCachingService.getStates(countryCode);
  }

  handleStateChange(countryCode, stateCode) {
    this.cities$ = this.httpCachingService.getCities(countryCode, stateCode);
  }
}
