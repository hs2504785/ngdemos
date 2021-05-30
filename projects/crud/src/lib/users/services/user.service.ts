import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { map } from 'rxjs/operators';
import { userFeatureKey } from '../users.module';

@Injectable({
  providedIn: 'root',
})
export class UserService extends EntityCollectionServiceBase<any> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(userFeatureKey, serviceElementsFactory);
  }

  getUserByIdFromCache(userId) {
    return this.entities$.pipe(
      map(users => {
        return users.find(user => user.id === +userId);
      }),
    );
  }
}
