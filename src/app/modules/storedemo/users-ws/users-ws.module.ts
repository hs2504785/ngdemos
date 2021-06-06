import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersWsRoutingModule } from './users-ws-routing.module';
import { UsersWsComponent } from './users-ws.component';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap,
} from '@ngrx/data';
import { UsersWsDataService } from './services/users-ws-data.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { UserWsDialogComponent } from './user-ws-dialog/user-ws-dialog.component';

export const usersWsFeatureKey = 'users';

export const entityMetadata: EntityMetadataMap = {
  [usersWsFeatureKey]: {
    entityDispatcherOptions: {
      optimisticUpdate: true,
    },
    selectId: user => user._id,
  },
};

@NgModule({
  declarations: [UsersWsComponent, UserWsDialogComponent],
  imports: [
    CommonModule,
    UsersWsRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class UsersWsModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private usersDataService: UsersWsDataService,
  ) {
    this.eds.registerMetadataMap(entityMetadata);

    this.entityDataService.registerService(
      usersWsFeatureKey,
      this.usersDataService,
    );
  }
}
