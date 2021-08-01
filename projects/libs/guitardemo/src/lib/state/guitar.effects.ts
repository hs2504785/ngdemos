import { mergeMap, map, catchError } from 'rxjs/operators';
import { GuitarsService } from './../services/guitars.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { getItems, loadItems } from './guitar.actions';

@Injectable()
export class GuitarEffects {
  constructor(
    private actions$: Actions,
    private guitarsService: GuitarsService,
  ) {}

  loadGuitars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getItems),
      mergeMap(() =>
        this.guitarsService.getAll().pipe(
          map((guitars: any) => loadItems({ payload: guitars })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );
}
