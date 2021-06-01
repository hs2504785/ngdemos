import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import {
  sendingCustomerSupportMessage,
  sendMessageStatus,
} from './customer-support.actions';
import { CustomerSupportService } from '../../shared/services/customer-support.service';

@Injectable()
export class CustomerSupportEffects {
  sendMessage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sendingCustomerSupportMessage),
      switchMap(action =>
        this.customerSupportService
          .sendMessage(action.data)
          .pipe(map(bool => sendMessageStatus({ isSentSuccess: bool }))),
      ),
    );
  });

  constructor(
    private actions$: Actions,
    private customerSupportService: CustomerSupportService,
  ) {}
}
