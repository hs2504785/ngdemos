import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { UserWsInterface } from '../models/user-ws-interface';
import { usersWsFeatureKey } from '../users-ws.module';

@Injectable({
  providedIn: 'root',
})
export class UserWsService extends EntityCollectionServiceBase<UserWsInterface> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(usersWsFeatureKey, serviceElementsFactory);
  }

  // You business logic goes here
}
