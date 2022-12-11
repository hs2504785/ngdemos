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
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
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
