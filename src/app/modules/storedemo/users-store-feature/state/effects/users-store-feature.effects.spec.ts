import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UsersStoreFeatureEffects } from './users-store-feature.effects';

describe('UsersStoreFeatureEffects', () => {
  let actions$: Observable<any>;
  let effects: UsersStoreFeatureEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersStoreFeatureEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(UsersStoreFeatureEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
