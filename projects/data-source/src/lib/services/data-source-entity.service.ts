import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class DataSourceEntityService extends EntityCollectionServiceBase<any> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('DataSource', serviceElementsFactory);
  }

  // addOne(data) {
  //   const dataToBeAdded = {
  //     ...data,
  //     _id: this.dsHelperService.getActiveTabId(data.processId),
  //   };
  //   this.addOneToCache(dataToBeAdded);
  // }

  // private handleMany(dataArr, update = false) {
  //   const mappedArr = dataArr.map((item) => {
  //     return { ...item, _id: this.dsHelperService.activeTabId };
  //   });

  //   if (update) {
  //     this.updateManyInCache(mappedArr);
  //   } else {
  //     this.addManyToCache(mappedArr);
  //   }
  // }

  // addMany(dataArr) {
  //   this.handleMany(dataArr);
  // }

  // updateOne(data) {
  //   const dataToBeUpdated = { ...data, _id: this.dsHelperService.activeTabId };
  //   this.updateOneInCache(dataToBeUpdated);
  // }

  // updateMany(dataArr) {
  //   this.handleMany(dataArr, true);
  // }

  // removeOne(elm, tabId = this.dsHelperService.activeTabId) {
  //   const elmId = typeof elm === 'string' ? elm : elm.id;
  //   this.removeOneFromCache(`${tabId}_${elmId}`);
  // }

  // removeMany(tabId = this.dsHelperService.activeTabId) {
  //   this.entities$
  //     .pipe(
  //       map((sources) =>
  //         sources.filter((source) => {
  //           return source._id.includes(tabId);
  //         })
  //       ),
  //       tap((res) => {
  //         res.length && this.removeManyFromCache(res);
  //       }),
  //       take(1)
  //     )
  //     .subscribe();
  // }

  // upsertOne(data) {
  //   const dataToBeAdded = {
  //     ...data,
  //     _id: this.dsHelperService.getActiveTabId(data.processId),
  //   };
  //   this.upsertOneInCache(dataToBeAdded);
  // }

  // getOneObs(elm) {
  //   const elmId = typeof elm === 'string' ? elm : elm.id;
  //   return this.selectors$.entities$.pipe(
  //     map((sources) => sources.filter((source) => source.id === elmId)[0]),
  //     take(1)
  //   );
  // }

  // getOne(elm) {
  //   return getValue(this.getOneObs(elm));
  // }

  // patchOne(parentObj, childObj) {
  //   const childTask = {
  //     children: [...parentObj.children, childObj],
  //   };

  //   const mergedTask = { ...parentObj, ...childTask };

  //   this.upsertOne(mergedTask);
  // }

  // async patchOneById(parentId, childObj) {
  //   const parentObj = await this.getOne(parentId);
  //   this.patchOne(parentObj, childObj);
  // }

  // async removeChildByKey(parentId, key) {
  //   const parentObj = await this.getOne(parentId);
  //   const filteredResult = parentObj.children.filter(
  //     (item) => item.name !== key
  //   );
  //   const currentState = {
  //     ...parentObj,
  //     children: filteredResult,
  //   };

  //   this.updateOne(currentState);
  // }
}
