import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { map, take } from 'rxjs/operators';
import { MatTreeFlattener } from '@angular/material/tree';
import { FileNode, FlatTreeNode } from '../models/data-source.interface';

@Injectable()
export class DataSourceEntityService extends EntityCollectionServiceBase<any> {
  /** The TreeFlattener is used to generate the flat list of items from hierarchical data. */
  treeFlattener: MatTreeFlattener<FileNode, FlatTreeNode>;

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('DataSource', serviceElementsFactory);
  }

  addOne(data) {
    this.addOneToCache(data);
  }

  addMany(dataArr) {
    this.addManyToCache(dataArr);
  }

  updateOne(data) {
    this.updateOneInCache(data);
  }

  updateMany(dataArr) {
    this.updateManyInCache(dataArr);
  }

  removeOne(elm) {
    this.removeOneFromCache(elm);
  }

  removeMany(dataArr) {
    this.removeManyFromCache(dataArr);
  }

  upsertOne(data) {
    this.upsertOneInCache(data);
  }

  getAll() {
    return this.selectors$.entities$;
  }

  getOne(elm) {
    const elmId = typeof elm === 'string' ? elm : elm.id;
    return this.selectors$.entities$.pipe(
      map((sources) => sources.filter((source) => source.id === elmId)[0]),
      take(1)
    );
  }

  patchOne(parentObj, childObj) {
    const childTask = {
      children: [...parentObj.children, childObj],
    };

    const mergedTask = { ...parentObj, ...childTask };

    this.upsertOne(mergedTask);
  }

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
