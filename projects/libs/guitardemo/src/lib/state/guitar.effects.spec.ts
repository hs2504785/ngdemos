import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GuitarEffects } from './guitar.effects';

describe('GuitarEffects', () => {
  let actions$: Observable<any>;
  let effects: GuitarEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GuitarEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(GuitarEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
