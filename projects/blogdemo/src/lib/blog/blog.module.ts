import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { PostListComponent } from './post-list/post-list.component';
import { UserComponent } from './user/user.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { PostComponent } from './post/post.component';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap,
} from '@ngrx/data';
import { UserDataService } from '../services/user-data.service';
import { PostDataService } from '../services/post-data.service';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [{ path: ':userId', component: UserComponent }],
  },
];

export const userFeatureKey = 'User';
export const postFeatureKey = 'Post';

export const entityMetadata: EntityMetadataMap = {
  [userFeatureKey]: {
    entityDispatcherOptions: {
      optimisticUpdate: true,
      optimisticAdd: true,
    },
  },
  [postFeatureKey]: {
    entityDispatcherOptions: {
      optimisticUpdate: true,
      optimisticAdd: true,
    },
  },
};

@NgModule({
  declarations: [
    AdminComponent,
    PostListComponent,
    UserComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    RouterModule.forChild(routes),
  ],
})
export class BlogModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private userDataService: UserDataService,
    private postDataService: PostDataService,
  ) {
    this.eds.registerMetadataMap(entityMetadata);

    this.entityDataService.registerService(
      userFeatureKey,
      this.userDataService,
    );
    this.entityDataService.registerService(
      postFeatureKey,
      this.postDataService,
    );
  }
}
