import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpCachingService } from '../../services/http-caching.service';

@Component({
  selector: 'app-in-memory',
  templateUrl: './in-memory.component.html',
  styleUrls: ['./in-memory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InMemoryComponent implements OnInit {
  countries = [];
  states = [];
  cities = [];

  constructor(private httpCaching: HttpCachingService) {}

  ngOnInit(): void {
    this.countries = this.httpCaching.getAllCountries();
  }

  handleCountryChange(isoCode) {
    this.states = this.httpCaching.getStatesOfCountry(isoCode);
  }

  handleStateChange(countryCode, stateCode) {
    this.cities = this.httpCaching.getCitiesOfState(countryCode, stateCode);
  }
}
