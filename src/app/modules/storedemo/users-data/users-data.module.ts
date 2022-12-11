import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersDataRoutingModule } from './users-data-routing.module';
import { UsersDataComponent } from './users-data.component';
import { UserDataDialogComponent } from './user-data-dialog/user-data-dialog.component';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { ReactiveFormsModule } from '@angular/forms';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap,
} from '@ngrx/data';
import { UsersDataService } from './services/users-data.service';

export const usersFeatureKey = 'users';

export const entityMetadata: EntityMetadataMap = {
  [usersFeatureKey]: {
    entityDispatcherOptions: {
      optimisticUpdate: true,
    },
    selectId: user => user._id,
  },
};

@NgModule({
  declarations: [UsersDataComponent, UserDataDialogComponent],
  imports: [
    CommonModule,
    UsersDataRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class UsersDataModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private usersDataService: UsersDataService,
  ) {
    this.eds.registerMetadataMap(entityMetadata);

    this.entityDataService.registerService(
      usersFeatureKey,
      this.usersDataService,
    );
  }
}
