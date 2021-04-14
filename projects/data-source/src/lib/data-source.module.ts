import { NgModule } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DataSourceListComponent } from './data-source-list/data-source-list.component';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap,
} from '@ngrx/data';

import { DataSourceService } from './services/data-source.service';
import { DataSourceEntityService } from './services/data-source-entity.service';

export const entityMetadata: EntityMetadataMap = {
  DataSource: {
    selectId(entity) {
      if (entity === null) {
        return undefined;
      } else if (entity.id || entity.name) {
        const entityKey = entity.id || entity.name;
        return `${entityKey}`;
      } else {
        return entity._id;
      }
    },
    entityDispatcherOptions: {
      optimisticUpdate: true,
    },
  },
};

@NgModule({
  declarations: [DataSourceListComponent],
  imports: [MatTreeModule, MatIconModule, MatButtonModule],
  exports: [DataSourceListComponent],
  providers: [DataSourceService, DataSourceEntityService],
})
export class DataSourceModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private dataSourceService: DataSourceService
  ) {
    this.eds.registerMetadataMap(entityMetadata);

    this.entityDataService.registerService(
      'DataSource',
      this.dataSourceService
    );
  }
}
