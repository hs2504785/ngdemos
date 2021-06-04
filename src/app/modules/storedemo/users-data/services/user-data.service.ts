import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { UserDataInterface } from '../models/user-data-interface';
import { usersFeatureKey } from '../users-data.module';

@Injectable({
  providedIn: 'root',
})
export class UserDataService1 extends EntityCollectionServiceBase<UserDataInterface> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(usersFeatureKey, serviceElementsFactory);
  }

  // You business logic goes here
}
