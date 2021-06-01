import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CustomerSupportEffects } from './customer-support.effects';

describe('CustomerSupportEffects', () => {
  let actions$: Observable<any>;
  let effects: CustomerSupportEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CustomerSupportEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CustomerSupportEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
