import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country, State, City } from 'country-state-city';

@Injectable()
export class InMemoryService {
  getAllCountries() {
    return Country.getAllCountries();
  }

  getStatesOfCountry(countryCode) {
    return State.getStatesOfCountry(countryCode);
  }

  getCitiesOfState(countryCode, stateCode) {
    return City.getCitiesOfState(countryCode, stateCode);
  }
}
