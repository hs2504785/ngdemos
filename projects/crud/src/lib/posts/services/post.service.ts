import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { postFeatureKey } from '../posts.module';

@Injectable({
  providedIn: 'root',
})
export class PostService extends EntityCollectionServiceBase<any> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(postFeatureKey, serviceElementsFactory);
  }
}
