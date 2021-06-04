import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersDataRoutingModule } from './users-data-routing.module';
import { UsersDataComponent } from './users-data.component';
import { UserDataDialogComponent } from './user-data-dialog/user-data-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
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
