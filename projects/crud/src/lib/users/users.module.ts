import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserComponent } from './user/user.component';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap,
} from '@ngrx/data';
import { UserDataService } from './services/user-data.service';

export const userFeatureKey = 'user-ngrx-data';

export const entityMetadata: EntityMetadataMap = {
  [userFeatureKey]: {
    entityDispatcherOptions: {
      optimisticUpdate: true,
    },
  },
};

@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    AddUserComponent,
    UserComponent,
    UserDialogComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [UserDataService],
})
export class UsersModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private userDataService: UserDataService,
  ) {
    this.eds.registerMetadataMap(entityMetadata);

    this.entityDataService.registerService(
      userFeatureKey,
      this.userDataService,
    );
  }
}
